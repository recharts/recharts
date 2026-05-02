import{e}from"./iframe-DbVDg_ca.js";import{g as l}from"./utils-ePvtT4un.js";import{A as n}from"./AreaChartArgs-Bv-A2XgY.js";import{p as E,s as R}from"./Page-Cj8EiXz7.js";import{A as p}from"./AreaChart-gavqv_S5.js";import{R as c}from"./arrayEqualityCheck-BSVOQ7T-.js";import{A as h}from"./Area-GpUxoA0g.js";import{C as w}from"./CartesianGrid-CySqrimi.js";import{T as v}from"./Tooltip-mRYLvKKE.js";import{R as g}from"./RechartsHookInspector-WP52i-1p.js";import{X as S}from"./XAxis-nk-GltPq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-sJojUHlC.js";import"./index-CUo349tj.js";import"./immer-0ZZjS5Nj.js";import"./hooks-8LGpZrMc.js";import"./axisSelectors-DuQQA8AF.js";import"./d3-scale-Ca2GXXvQ.js";import"./zIndexSlice-CDzSIoPc.js";import"./renderedTicksSlice-BYUGSQCb.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BIeZSTsS.js";import"./chartDataContext-DkZqMAvH.js";import"./CategoricalChart-DW6_TUNV.js";import"./resolveDefaultProps-DgDD8GmR.js";import"./Curve-7li-NOkq.js";import"./types-9bS4DgjT.js";import"./step-DVp28hgV.js";import"./Layer-C9NfejAk.js";import"./ReactUtils-ruqV-srf.js";import"./Label-CT2eYMKi.js";import"./Text-BjaMrcvh.js";import"./DOMUtils-DXLQ8uU1.js";import"./ZIndexLayer-D5PjewgR.js";import"./ActivePoints-Ck9TrlmM.js";import"./Dot-Boac-7JN.js";import"./RegisterGraphicalItemId-BdjwpoFI.js";import"./GraphicalItemClipPath-CLSG_HT0.js";import"./SetGraphicalItem-BwNPbTjt.js";import"./useAnimationId-BGASjBYn.js";import"./getRadiusAndStrokeWidthFromDot-I2XTj7OF.js";import"./graphicalItemSelectors-DRaebRWv.js";import"./CartesianAxis-wfs3tk0I.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-lMXxs2jy.js";import"./uniqBy-B0VkYOM0.js";import"./iteratee-DJFQcjLL.js";import"./Cross-DjwFZztB.js";import"./Rectangle-C71dLN6n.js";import"./Sector-DIpZMX41.js";import"./index-SfPrSKbK.js";import"./ChartSizeDimensions-DQlshRXH.js";import"./OffsetShower-DH3pRQIv.js";import"./PlotAreaShower-D9cE9N3J.js";function _(t,r,o){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-r),t._y2+t._k*(t._y1-o),t._x2,t._y2)}function T(t,r){this._context=t,this._k=(1-r)/6}T.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:_(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,r){switch(t=+t,r=+r,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,r):this._context.moveTo(t,r);break;case 1:this._point=2,this._x1=t,this._y1=r;break;case 2:this._point=3;default:_(this,t,r);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=r}};const O=function t(r){function o(m){return new T(m,r)}return o.tension=function(m){return t(+m)},o}(0),Dt={argTypes:n,component:p},i={name:"Simple",render:t=>e.createElement(c,{width:"100%",height:400},e.createElement(p,{...t,margin:{top:0,bottom:0,left:50,right:50}},e.createElement(h,{dataKey:"pv",strokeWidth:3,stroke:"#2451B7",fill:"#5376C4"}),e.createElement(w,{opacity:.1,vertical:!1}),e.createElement(v,null),e.createElement(g,null))),args:{...l(n),data:E,margin:{top:0,bottom:0,left:50,right:50}}},j=O.tension(.5),a={render:t=>e.createElement(c,{width:"100%",height:400},e.createElement(p,{...t},e.createElement(h,{type:j,dataKey:"pv",stroke:"#ff7300",fill:"#ff7300",fillOpacity:.9}),e.createElement(g,null))),args:{...l(n),data:E,layout:"horizontal",margin:{top:0,bottom:0,left:50,right:50}}},s={render:t=>e.createElement(c,{width:"100%",height:400},e.createElement(p,{...t},e.createElement(h,{dataKey:"A",stroke:"green",fill:"green",fillOpacity:.5}),e.createElement(S,{dataKey:"subject",type:"category",allowDuplicatedCategory:!1}),e.createElement(v,null),e.createElement(g,null))),args:{...l(n),data:R,layout:"horizontal",margin:{top:0,bottom:0,left:50,right:50}}};var f,d,u;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
