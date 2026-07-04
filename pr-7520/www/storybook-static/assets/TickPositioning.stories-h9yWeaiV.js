import{R as t}from"./iframe-D-BXEDkQ.js";import{R as m}from"./zIndexSlice-CNOaqOPA.js";import{L as s}from"./LineChart-C7AsqbZr.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BWnL5Flc.js";import{X as l}from"./XAxis-CsYsIQZ3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DcYZZCS9.js";import"./index-G9DZGzqS.js";import"./index-DyZMLGLF.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BCmCl_HK.js";import"./isWellBehavedNumber-DG1BXq00.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAPlnek-.js";import"./index-CSvF-BDD.js";import"./index-Dzr30MxI.js";import"./renderedTicksSlice-BW0B_yyu.js";import"./axisSelectors-DbolJrr5.js";import"./d3-scale-Cw0gW9iZ.js";import"./CartesianChart-B9gu2iu_.js";import"./chartDataContext-Drjp45TO.js";import"./CategoricalChart-Dffh87Ow.js";import"./Layer-DZ4WZEl1.js";import"./Curve-BiodO3IJ.js";import"./types-CKqvof5k.js";import"./step-O6juOnPn.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bb-goO_2.js";import"./Label-BXssQtMI.js";import"./Text-DKRb_pWs.js";import"./DOMUtils-BtYPMtse.js";import"./ZIndexLayer-BMtWXslr.js";import"./useAnimationId-BbJgISg4.js";import"./ActivePoints-C16wOqeD.js";import"./Dot-JDsRBdmy.js";import"./RegisterGraphicalItemId-D4LQkijr.js";import"./ErrorBarContext-CYH48hpc.js";import"./GraphicalItemClipPath-CpDe9sQE.js";import"./SetGraphicalItem-DFCa6_Km.js";import"./getRadiusAndStrokeWidthFromDot-BimxZCtp.js";import"./ActiveShapeUtils-D6NCpbS5.js";import"./CartesianAxis-BPou2DWk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const intervalOptions = ['preserveStart', 'preserveEnd', 'preserveStartEnd', 'equidistantPreserveStart', 0] as const;
    return <ResponsiveContainer>
        <LineChart data={ticks}
      // Margins are necessary to show ticks that extend beyond the chart (i.e. last and first tick).
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      }}>
          <Line dataKey="coordinate" />
          {intervalOptions.map((intervalOption, index) => <XAxis dataKey="value" key={intervalOption} interval={intervalOption} xAxisId={index} label={intervalOption} height={70} />)}
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ot=["TickPositioning"];export{r as TickPositioning,ot as __namedExportsOrder,it as default};
