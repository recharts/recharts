import{e}from"./iframe-DA7dsAjt.js";import{g as l}from"./utils-ePvtT4un.js";import{A as n}from"./AreaChartArgs-DUoXZKOw.js";import{p as E,s as R}from"./Page-Cj8EiXz7.js";import{A as p}from"./AreaChart-OjKMTuNW.js";import{R as c}from"./arrayEqualityCheck-B2Tullra.js";import{A as h}from"./Area-DUMhKIdw.js";import{C as w}from"./CartesianGrid-Q-EMfYy9.js";import{T as v}from"./Tooltip-Cgq-37v9.js";import{R as g}from"./RechartsHookInspector-DyuMbIeF.js";import{X as S}from"./XAxis-D3BVUN8u.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DUd0AjRv.js";import"./index-CjGLS6_1.js";import"./immer-CgNeP4Cn.js";import"./hooks-D-1ZrX9e.js";import"./axisSelectors-BJkuMl5j.js";import"./d3-scale-vc3zo1Az.js";import"./zIndexSlice-QK0EAxoG.js";import"./renderedTicksSlice-izlEPV0Q.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BGT6UcsB.js";import"./chartDataContext-COI91jzY.js";import"./CategoricalChart-OHcwZY8x.js";import"./resolveDefaultProps-B7E-EJR0.js";import"./Curve-CSUb-Mmt.js";import"./types-BGlT9ghA.js";import"./step-D3Kjh6oK.js";import"./Layer-CA2bGkBA.js";import"./ReactUtils-Cqv1MuoY.js";import"./Label-BbSyBdDv.js";import"./Text-BDZGl2AG.js";import"./DOMUtils-g7EKoefO.js";import"./ZIndexLayer-CtisNWGZ.js";import"./ActivePoints-CYKlTQ6D.js";import"./Dot-B0m4Ez5e.js";import"./RegisterGraphicalItemId-Cw14-A1S.js";import"./GraphicalItemClipPath-CU2uvT1M.js";import"./SetGraphicalItem-M42qZfYw.js";import"./useAnimationId-Ow7TV2bH.js";import"./getRadiusAndStrokeWidthFromDot-DJFGm-Zo.js";import"./graphicalItemSelectors-D6QPi44o.js";import"./CartesianAxis-5nCOjy0L.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CMdfJDCv.js";import"./uniqBy-R1SES33n.js";import"./iteratee-bjfE0mcN.js";import"./Cross-qcppa6F_.js";import"./Rectangle-C-tNMC4o.js";import"./Sector-CYPQyxpp.js";import"./index-WFnamGGq.js";import"./ChartSizeDimensions-DOvk2LHO.js";import"./OffsetShower-G9RnNqRi.js";import"./PlotAreaShower-BULJQmBU.js";function _(t,r,o){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-r),t._y2+t._k*(t._y1-o),t._x2,t._y2)}function T(t,r){this._context=t,this._k=(1-r)/6}T.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:_(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,r){switch(t=+t,r=+r,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,r):this._context.moveTo(t,r);break;case 1:this._point=2,this._x1=t,this._y1=r;break;case 2:this._point=3;default:_(this,t,r);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=r}};const O=function t(r){function o(m){return new T(m,r)}return o.tension=function(m){return t(+m)},o}(0),Dt={argTypes:n,component:p},i={name:"Simple",render:t=>e.createElement(c,{width:"100%",height:400},e.createElement(p,{...t,margin:{top:0,bottom:0,left:50,right:50}},e.createElement(h,{dataKey:"pv",strokeWidth:3,stroke:"#2451B7",fill:"#5376C4"}),e.createElement(w,{opacity:.1,vertical:!1}),e.createElement(v,null),e.createElement(g,null))),args:{...l(n),data:E,margin:{top:0,bottom:0,left:50,right:50}}},j=O.tension(.5),a={render:t=>e.createElement(c,{width:"100%",height:400},e.createElement(p,{...t},e.createElement(h,{type:j,dataKey:"pv",stroke:"#ff7300",fill:"#ff7300",fillOpacity:.9}),e.createElement(g,null))),args:{...l(n),data:E,layout:"horizontal",margin:{top:0,bottom:0,left:50,right:50}}},s={render:t=>e.createElement(c,{width:"100%",height:400},e.createElement(p,{...t},e.createElement(h,{dataKey:"A",stroke:"green",fill:"green",fillOpacity:.5}),e.createElement(S,{dataKey:"subject",type:"category",allowDuplicatedCategory:!1}),e.createElement(v,null),e.createElement(g,null))),args:{...l(n),data:R,layout:"horizontal",margin:{top:0,bottom:0,left:50,right:50}}};var f,d,u;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
