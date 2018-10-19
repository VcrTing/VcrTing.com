;(function () {
    var LightBox = function (settings) {
        var self = this;

        // 扩展参数
        this.settings = {
            speed: 500, // 动画速度 （推荐取值范围: 100 - 9999）
            ratio: 1, // 图片宽或高超过了窗口宽高，就以多少比例显示，适用于PC端 （推荐取值范围: 0.1 - 2）
            mask_style: 'background-color: rgba(0, 0, 0, 0.2);', // 遮罩层样式
        };
        $.extend(this.settings, settings || {});

        // 创建遮罩和弹出框
        this.popupMask = $('<div id="g-lightbox-mask" style="' + this.settings.mask_style + '">');
        this.popupWin  = $('<div id="g-lightbox-popup">');

        // 保存的 BODY
        this.bodyNode = $(document.body);

        // 渲染剩余的 DOM，并且插入到 BODY
        this.renderDOM();
        
        this.picViewArea = this.popupWin.find('div.lightbox-pic-view');
        this.popupPic = this.popupWin.find('img.lightbox-image'); // 图片
        this.picCaptionArea = this.popupWin.find('div.lightbox-pic-caption');
        this.nextBtn = this.popupWin.find('span.lightbox-next-btn');
        this.prevBtn = this.popupWin.find('span.lightbox-prev-btn');

        this.captionText = this.popupWin.find('p.lightbox-pic-desc');
        this.currentIndex = this.popupWin.find('span.lightbox-of-index');
        this.closeBtn = this.popupWin.find('div.lightbox-close-btn');

        // 事件委托，获取组数据
        this.groupName = null;
        this.groupData = [];
        this.bodyNode.delegate('*[data-role=lightbox]', 'click', function (e) {
            // 阻止事件冒泡
            e.stopPropagation();
            var currentGroupName = $(this).attr('data-group');
            if (currentGroupName != self.groupName) {
                self.groupName = currentGroupName;
                // 根据当前组名获取同一组数据
                self.getGroup();
            }
            // 初始化弹出
            self.initPopup($(this));
        });

        // 关闭弹出
        this.popupMask.click(function () {
            $(this).fadeOut();
            self.popupWin.fadeOut();
            this.clear = false;
        });
        this.closeBtn.click(function () {
            self.popupMask.fadeOut();
            self.popupWin.fadeOut();
            this.clear = false;
        });

        // 上下切换按钮
        this.flag = true;
        this.nextBtn.hover(
            function () {
                if(!$(this).hasClass('ele_hide') && self.groupData.length > 1) {
                    $(this).html('<i class="iconfont icon-right"></i>');
                }
            },
            function () {
                if(!$(this).hasClass('ele_hide') && self.groupData.length > 1) {
                    $(this).html('');
                }
            }
        ).click(
            function (e) {
                if (!$(this).hasClass('ele_hide') && self.flag && self.groupData.length > 1) {
                    self.flag = false;
                    e.stopPropagation();
                    self.goto('next');
                }
            }
        );
        this.prevBtn.hover(
            function () {
                if(!$(this).hasClass('ele_hide') && self.groupData.length > 1) {
                    $(this).html('<i class="iconfont icon-left"></i>');
                }
            },
            function () {
                if(!$(this).hasClass('ele_hide') && self.groupData.length > 1) {
                    $(this).html('');
                }
            }
        ).click(
            function (e) {
                if (!$(this).hasClass('ele_hide') && self.flag && self.groupData.length > 1) {
                    self.flag = false;
                    e.stopPropagation();
                    self.goto('prev');
                }
            }
        );

        // 判断是否是 IE6
        this.isIE6 = /MSIE 6.0/gi.test(window.navigator.userAgent);

        // 绑定窗口调整事件
        var timer = null;
        this.clear = false;
        $(window).resize(function () {
            if (this.clear) {
                window.clearTimeout(timer);
                timer = window.setTimeout(function () {
                    this.loadPicSize(self.groupData[self.index].src);
                }, self.settings.speed);
                if (self.isIE6) {
                    this.popupMask.css({
                        width: $(window).width(),
                        height: $(window).height()
                    });
                }
            }
        }).keyup(function (e) {
            var keyValue = e.which;
            if (keyValue == 38 || keyValue == 37) {
                self.prevBtn.click();
            } else if (keyValue == 39 || 40) {
                self.nextBtn.click();
            }
        });

        // IE 6
        if (this.isIE6) {
            $(window).scroll(function () {
                self.popupMask.css('top', $(window).scrollTop());
                // self.popupWin.css('top', $(window).scrollTop());
            });
        }
    };
    LightBox.prototype = {
        goto: function (dir) {
            if (dir === 'next') {
                this.index ++;
                if (this.index >= this.groupData.length - 1) {
                    this.nextBtn.addClass('ele_hide').html('');
                }
                if (this.index != 0) {
                    this.prevBtn.removeClass('ele_hide');
                }
                var src = this.groupData[this.index].src;
                this.loadPicSize(src);
            } else if (dir === 'prev') {
                this.index --;
                if (this.index <= 0) {
                    this.prevBtn.addClass('ele_hide').html('');
                }
                if (this.index != this.groupData.length - 1) {
                    this.nextBtn.removeClass('ele_hide');
                } 
                var src = this.groupData[this.index].src;
                this.loadPicSize(src);
            }
        },
        loadPicSize: function (sourceSrc) {
            var self = this;
            self.popupPic.css({
                width: 'auto',
                height: 'auto'
            }).hide();
            self.picCaptionArea.hide();
            this.preLoadImg(sourceSrc, function () {
                self.popupPic.attr('src', sourceSrc);
                var picWidth = self.popupPic.width();
                var picHeight = self.popupPic.height();
                self.changePic(picWidth, picHeight);
            });
        },
        changePic: function (width, height) {
            var self = this;
            var borderNum = 2;
            var winWidth = $(window).width();
            var winHeight = $(window).height();
            var scale = Math.min(winWidth / (width+borderNum), winHeight / (height + borderNum), 1);
            // 重赋值 宽高
            if ((width > winWidth) || (height > winHeight)) {
                width = width*scale*self.settings.ratio;
                height = height*scale*self.settings.ratio;
            } else {
                width = width*scale;
                height = height*scale;
            }

            this.picViewArea.animate({
                width: width - borderNum,
                height: height - borderNum
            }, self.settings.speed);
            var top = (winWidth - height) / 2;
            if (this.isIE6) {
                top += $(window).scrollTop();
            }
            this.popupWin.animate({
                    width: width,
                    height: height,
                    marginLeft: - (width / 2),
                    top: (winHeight - height) / 2
                }, self.settings.speed, function () {
                    self.popupPic.css({
                        width: width - borderNum,
                        height: height - borderNum
                    }).fadeIn();
                    self.picCaptionArea.fadeIn();
                    self.flag = true;
                    self.clear = true;
                });
            // 设置文字与当前索引
            this.captionText.text(this.groupData[this.index].caption);
            this.currentIndex.text((this.index + 1) + '/' + this.groupData.length);
        },
        preLoadImg: function (src, callback) {
            var img = new Image();
            if (!!window.ActiveXObject) {
                img.onreadystatechange = function () {
                    if (this.readySate == 'complete') {
                        callback();
                    }
                };
            } else {
                img.onload = function () {
                    callback();
                };
            }
            img.src = src;
        },
        showMaskAndPopup: function (sourceSrc, curentId) {
            var self = this;
            var borderNum = 2;
            this.popupPic.hide();
            this.picCaptionArea.hide();

            var winWidth = $(window).width();
            var winHeight = $(window).height();

            this.picViewArea.css({
                width: winWidth / 2,
                height: winHeight / 2
            });
            var scrollTop = $(window).scrollTop();
            if (this.isIE6) {
                this.popupMask.css({
                    width: winWidth,
                    height: winHeight,
                    top: scrollTop
                });
            }
            this.popupMask.fadeIn();
            this.popupWin.fadeIn();

            var viewHeight = winHeight / 2 + borderNum;
            var topAnimate = (winHeight - viewHeight) / 2
            this.popupWin.css({
                    width: winWidth / 2 + borderNum,
                    height: winHeight / 2 + borderNum,
                    marginLeft: - (winWidth / 2 + borderNum) / 2,
                    top: (this.isIE6 ? -(viewHeight + screenTop) : -viewHeight)
                }).animate({
                        top: (this.isIE6 ? (topAnimate + scrollTop) : topAnimate)
                    }, self.settings.speed, function () {
                        self.loadPicSize(sourceSrc);
                    });

            // 根据当前点击的元素的id获取在当前组里面的索引
            this.index = this.getIndexOf(curentId);
            var groupDataLength = this.groupData.length;
            if (groupDataLength > 1) {
                if (this.index === 0) {
                    this.prevBtn.addClass('ele_hide');
                    this.nextBtn.removeClass('ele_hide');
                } else if (this.index === groupDataLength - 1) {
                    this.prevBtn.removeClass('ele_hide');
                    this.nextBtn.addClass('ele_hide');
                } else {
                    this.prevBtn.removeClass('ele_hide');
                    this.nextBtn.removeClass('ele_hide');
                }
            } else {
                this.nextBtn.addClass('ele_hide');
                this.prevBtn.addClass('ele_hide');
            }
        },
        getIndexOf: function (curentId) {
            var index = 0;
            $(this.groupData).each(function (i) {
                index = i;
                if (this.id === curentId) {
                    return false;
                }
            });
            return index;
        },
        initPopup: function (curentObj) {
            var self = this;
            sourceSrc = curentObj.attr('data-source');
            curentId = curentObj.attr('data-id');
            this.showMaskAndPopup(sourceSrc, curentId);
        },
        getGroup: function () {
            var self = this;
            // 根据当前的组别名获取页面中相同组名的对象
            var groupList = this.bodyNode.find('*[data-group=' + this.groupName + ']');
            self.groupData.length = 0;
            groupList.each(function () {
                self.groupData.push({
                    src: $(this).attr('data-source'),
                    id: $(this).attr('data-id'),
                    caption: $(this).attr('data-caption')
                });
            });
        },
        renderDOM: function () {
            var strDom = '' + 
                '<div class="lightbox-pic-view">' +
                '    <span class="lightbox-btn lightbox-prev-btn">' +
                '        ' +
                '    </span>' +
                '    <img class="lightbox-image" src="../夏日缤纷.jpg">' +
                '    <span class="lightbox-btn lightbox-next-btn">' +
                '        ' +
                '    </span>' +
                '</div>' +
                '<div class="lightbox-pic-caption">' +
                '    <div class="lightbox-caption-area">' +
                '        <p class="lightbox-pic-desc">图片标题</p>' +
                '        <span class="lightbox-of-index">1/4</span>' +
                '    </div>' +
                '    <div class="lightbox-close-btn">' +
                '        <i class="iconfont icon-ego-close"></i>' +
                '    </div>' +
                '</div>';
            // 插入
            this.popupWin.html(strDom);
            this.bodyNode.append(this.popupMask, this.popupWin);
        }
    };
    window['LightBox'] = LightBox;
})(jQuery);