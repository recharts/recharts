import{R as t}from"./iframe-BhYIBUmE.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-M8_RlJ2N.js";import{R as g}from"./zIndexSlice-iZ75WhkA.js";import{X as S}from"./XAxis-B9ZJYuv4.js";import{Y as h}from"./YAxis-BDjlgMSD.js";import{S as A}from"./Scatter-Do51keI1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DQUmtvyG.js";import"./index-BoNxyHn5.js";import"./index-B02QR74t.js";import"./index-DEEvK7wS.js";import"./index-D-p5hhZ6.js";import"./throttle-Y6Q35rOn.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BvbBXc0R.js";import"./axisSelectors-XMI2B6JU.js";import"./resolveDefaultProps-BDtRZXkF.js";import"./isWellBehavedNumber-XdoKmyaC.js";import"./d3-scale-Ca87_qMg.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CnNFNMoi.js";import"./chartDataContext-DqiOTlWU.js";import"./CategoricalChart-DhAV5rxK.js";import"./CartesianAxis-D47H33vb.js";import"./Layer-Di4CjYT0.js";import"./Text-DvhjqfeR.js";import"./DOMUtils-0OARPr3L.js";import"./Label-D4aavVkg.js";import"./ZIndexLayer-DzEhLRNI.js";import"./types-98-DlTag.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BLN0wGQm.js";import"./useAnimationId-BPiSh6IJ.js";import"./Curve-BFWIv3Fl.js";import"./step-Dbe6DqiS.js";import"./path-DyVhHtw_.js";import"./tooltipContext-IsDItl8-.js";import"./Symbols-pEWRNwOG.js";import"./symbol-CZbvwugO.js";import"./ActiveShapeUtils-Di4Bw8dO.js";import"./RegisterGraphicalItemId-BXUxqLaU.js";import"./ErrorBarContext-CcwUloBe.js";import"./GraphicalItemClipPath-gTOFxICa.js";import"./SetGraphicalItem-ZzJW--aO.js";const nt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
