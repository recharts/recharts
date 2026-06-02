import{c as t}from"./iframe-Dy-e7pIM.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DWgqGcPH.js";import{c as g}from"./Coordinate-CcdTesrj.js";import{S as i}from"./ScatterChart-C3OCZun-.js";import{g as d}from"./zIndexSlice-BAzwug6r.js";import{X as S}from"./XAxis-CumYrXMb.js";import{Y as h}from"./YAxis-BX0V94CN.js";import{S as A}from"./Scatter-CvkHz6K8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D0mQ-9Gw.js";import"./index-SXoyUqv9.js";import"./index-rCxGgy9o.js";import"./index-DUyY-sZ6.js";import"./index-B7Kt7cV8.js";import"./immer-kVBDWM7h.js";import"./get-D_U-7Kmb.js";import"./renderedTicksSlice-D80uYtAJ.js";import"./axisSelectors-DHlr3EdZ.js";import"./d3-scale-MtjUkFvo.js";import"./resolveDefaultProps-BOUnRnbS.js";import"./isWellBehavedNumber-Bj92k7jm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cf77c1Wa.js";import"./chartDataContext-HpYadsZ6.js";import"./CategoricalChart-Csue9Qd9.js";import"./CartesianAxis-kW3aoD-D.js";import"./Layer-BQggJIEv.js";import"./Text-DrCcB5Q6.js";import"./DOMUtils-CWH-10kL.js";import"./Label-Bd4SV5Lr.js";import"./ZIndexLayer-DgxZOhGb.js";import"./types-B745wbwD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./ReactUtils-DdYRakW1.js";import"./Curve-rRxZ5v9J.js";import"./step-r56XM2D6.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Bpda8jyn.js";import"./Symbols-D4yMEFQO.js";import"./symbol-DCQhxAU3.js";import"./ActiveShapeUtils-FFunzflv.js";import"./RegisterGraphicalItemId-CWayAjG_.js";import"./ErrorBarContext-N7PuOz_i.js";import"./GraphicalItemClipPath-Birlsn4M.js";import"./SetGraphicalItem-rhS26CgA.js";import"./useAnimationId-D1tL6Rir.js";const nt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(d,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:g,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    const {
      data,
      ...rest
    } = args;
    return <ResponsiveContainer width="100%" height={400}>
        <ScatterChart {...rest}>
          <XAxis dataKey="x" />
          <YAxis dataKey="y" />
          <Scatter data={data} />
        </ScatterChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ScatterChartArgs),
    data: coordinateData,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }
}`,...(a=(e=r.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const ct=["API"];export{r as API,ct as __namedExportsOrder,nt as default};
