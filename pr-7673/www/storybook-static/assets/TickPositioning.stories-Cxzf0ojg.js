import{R as t}from"./iframe-B2LONqI2.js";import{R as n}from"./zIndexSlice-D9n4dMgM.js";import{L as s}from"./LineChart-pGz1ae0l.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DZxFVfIi.js";import{X as l}from"./XAxis-CrFRKpzA.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CdlfIoiX.js";import"./index-BFHlNwTp.js";import"./index-BJx3ZruJ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-ByqX23gf.js";import"./isWellBehavedNumber-BTg56jQA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Iajo6lbi.js";import"./index-DfifFuyy.js";import"./index-DjdDa-5Q.js";import"./axisSelectors-DBW39Q04.js";import"./d3-scale-BIs2XHGH.js";import"./renderedTicksSlice-BQg4gqwf.js";import"./CartesianChart-CDZJhjlJ.js";import"./chartDataContext-n7-aPmS3.js";import"./CategoricalChart-BjK9U0fb.js";import"./Layer-Db6cgHvt.js";import"./Curve-B_IAc-Uw.js";import"./types-B61LwKJ2.js";import"./step-BlTk4FPh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DwGSOvtC.js";import"./Label-DIFUcr_M.js";import"./Text-DImCa3tX.js";import"./DOMUtils-D3RPrc8V.js";import"./useId-BEHZ_Vtx.js";import"./useBackwardsCompatibleTheme-Bt3YMXHU.js";import"./ZIndexLayer-CjywmeuP.js";import"./useAnimationId-Cxf11lMm.js";import"./ActivePoints-qJroTt_-.js";import"./Dot-CF9Y01Yu.js";import"./RegisterGraphicalItemId-C9PI0JLV.js";import"./ErrorBarContext-DheDy1BL.js";import"./GraphicalItemClipPath-bhsI-95T.js";import"./SetGraphicalItem-9JpLqI-V.js";import"./getRadiusAndStrokeWidthFromDot-KnVcOglV.js";import"./ActiveShapeUtils-CWFSVymI.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CzeVRmKa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,mt as default};
