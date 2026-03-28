import{e}from"./iframe-CQJPfyRy.js";import{g as l}from"./utils-ePvtT4un.js";import{A as n}from"./AreaChartArgs-Bv-A2XgY.js";import{p as E,s as R}from"./Page-Cj8EiXz7.js";import{A as p}from"./AreaChart-DlwJPE9e.js";import{R as c}from"./arrayEqualityCheck-Do-enXm5.js";import{A as h}from"./Area-COW_lP5h.js";import{C as w}from"./CartesianGrid-2VhS-Z6i.js";import{T as v}from"./Tooltip-B7mPjElo.js";import{R as g}from"./RechartsHookInspector-BPipPUFl.js";import{X as S}from"./XAxis-C55dSO1i.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-7Czoz0bu.js";import"./index-asPVD2vd.js";import"./immer-DHWyBJal.js";import"./hooks-Br8DVu9M.js";import"./axisSelectors-gm8fWGo4.js";import"./d3-scale-0hh8p2_S.js";import"./zIndexSlice-BiBD01er.js";import"./renderedTicksSlice-DTP68QVC.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CPXNCGau.js";import"./chartDataContext-DJi5hdYR.js";import"./CategoricalChart-CEJ--eNG.js";import"./resolveDefaultProps-0riu8XRb.js";import"./Curve-ChVqsMwJ.js";import"./types-C_DlCak5.js";import"./step-8cZIHSos.js";import"./Layer-BR9af65P.js";import"./ReactUtils-BwwuZj5u.js";import"./Label-BC7yp0Hg.js";import"./Text-DUnDznQK.js";import"./DOMUtils-D2gdOsD8.js";import"./ZIndexLayer-CPRNxtdQ.js";import"./ActivePoints-9_VA3S9i.js";import"./Dot-CkHgD_rL.js";import"./RegisterGraphicalItemId-DMChCr2V.js";import"./GraphicalItemClipPath-CC9lmHGx.js";import"./SetGraphicalItem-Dq_i_ZrQ.js";import"./useAnimationId-CEC-e8Az.js";import"./getRadiusAndStrokeWidthFromDot-Cxhe8pLo.js";import"./graphicalItemSelectors-BRsFZMLS.js";import"./CartesianAxis-DQSl9zNs.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-5AqETRkk.js";import"./uniqBy-DNiBcrLY.js";import"./iteratee-CEMi4iou.js";import"./Cross-qpIYq5qe.js";import"./Rectangle-Dj9r1Fs-.js";import"./Sector-D83NtDJL.js";import"./index-Dy-O-5Cx.js";import"./ChartSizeDimensions-LXLx4zNb.js";import"./OffsetShower-DO50Xpn-.js";import"./PlotAreaShower-5vmtZ6RI.js";function _(t,r,o){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-r),t._y2+t._k*(t._y1-o),t._x2,t._y2)}function T(t,r){this._context=t,this._k=(1-r)/6}T.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:_(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,r){switch(t=+t,r=+r,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,r):this._context.moveTo(t,r);break;case 1:this._point=2,this._x1=t,this._y1=r;break;case 2:this._point=3;default:_(this,t,r);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=r}};const O=function t(r){function o(m){return new T(m,r)}return o.tension=function(m){return t(+m)},o}(0),Dt={argTypes:n,component:p},i={name:"Simple",render:t=>e.createElement(c,{width:"100%",height:400},e.createElement(p,{...t,margin:{top:0,bottom:0,left:50,right:50}},e.createElement(h,{dataKey:"pv",strokeWidth:3,stroke:"#2451B7",fill:"#5376C4"}),e.createElement(w,{opacity:.1,vertical:!1}),e.createElement(v,null),e.createElement(g,null))),args:{...l(n),data:E,margin:{top:0,bottom:0,left:50,right:50}}},j=O.tension(.5),a={render:t=>e.createElement(c,{width:"100%",height:400},e.createElement(p,{...t},e.createElement(h,{type:j,dataKey:"pv",stroke:"#ff7300",fill:"#ff7300",fillOpacity:.9}),e.createElement(g,null))),args:{...l(n),data:E,layout:"horizontal",margin:{top:0,bottom:0,left:50,right:50}}},s={render:t=>e.createElement(c,{width:"100%",height:400},e.createElement(p,{...t},e.createElement(h,{dataKey:"A",stroke:"green",fill:"green",fillOpacity:.5}),e.createElement(S,{dataKey:"subject",type:"category",allowDuplicatedCategory:!1}),e.createElement(v,null),e.createElement(g,null))),args:{...l(n),data:R,layout:"horizontal",margin:{top:0,bottom:0,left:50,right:50}}};var f,d,u;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <AreaChart {...args} margin={{
        top: 0,
        bottom: 0,
        left: 50,
        right: 50
      }}>
          <Area dataKey="pv" strokeWidth={3} stroke="#2451B7" fill="#5376C4" />
          <CartesianGrid opacity={0.1} vertical={false} />
          <Tooltip />
          <RechartsHookInspector />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    data: pageData,
    margin: {
      top: 0,
      bottom: 0,
      left: 50,
      right: 50
    }
  }
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var y,A,C;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <AreaChart {...args}>
          <Area type={stepAround} dataKey="pv" stroke="#ff7300" fill="#ff7300" fillOpacity={0.9} />
          <RechartsHookInspector />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    data: pageData,
    layout: 'horizontal',
    margin: {
      top: 0,
      bottom: 0,
      left: 50,
      right: 50
    }
  }
}`,...(C=(A=a.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var b,k,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <AreaChart {...args}>
          <Area dataKey="A" stroke="green" fill="green" fillOpacity={0.5} />
          <XAxis dataKey="subject" type="category" allowDuplicatedCategory={false} />
          <Tooltip />
          <RechartsHookInspector />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    data: subjectData,
    layout: 'horizontal',
    margin: {
      top: 0,
      bottom: 0,
      left: 50,
      right: 50
    }
  }
}`,...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const It=["API","CustomType","CategoricalAreaChart"];export{i as API,s as CategoricalAreaChart,a as CustomType,It as __namedExportsOrder,Dt as default};
