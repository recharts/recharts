import{R as t}from"./iframe-Czcj7Ej5.js";import{R as n}from"./zIndexSlice-CKivF8h7.js";import{L as s}from"./LineChart-DtRVpy72.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DqJpKjIv.js";import{X as l}from"./XAxis-BDziZgbX.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BVmZUzar.js";import"./index-DMWmOMbl.js";import"./index-B91NvUo7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-8BNEdWXX.js";import"./isWellBehavedNumber-Dco4JHSd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CDYHtUJT.js";import"./axisSelectors-BeEA7IYF.js";import"./d3-scale-BQoi7yt5.js";import"./index-B0JfwGdu.js";import"./index-Bxr1sCFD.js";import"./renderedTicksSlice-CbrcSGbF.js";import"./index-CFVWldzh.js";import"./CartesianChart-Dv6L8FEP.js";import"./chartDataContext-Bk1K2XnM.js";import"./CategoricalChart-Du7LZMoH.js";import"./Layer-2POOn5CI.js";import"./Curve-BM-kcMMV.js";import"./types-CjYnj8ko.js";import"./step-hNno3B0H.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B6csDPia.js";import"./Label-OqXB0-3Q.js";import"./Text-BN2m7we3.js";import"./DOMUtils-CVT-c_43.js";import"./useId-3K3eUDJ4.js";import"./useBackwardsCompatibleTheme-BpiBN5I0.js";import"./ZIndexLayer-CF-iLGvZ.js";import"./useAnimationId-_fI9jCE-.js";import"./ActivePoints-BVCg7sLW.js";import"./Dot-Cx9jlkw_.js";import"./RegisterGraphicalItemId-DZFxFD16.js";import"./ErrorBarContext-BTb3p3NR.js";import"./GraphicalItemClipPath-BePsYx1e.js";import"./SetGraphicalItem-CX4EE90C.js";import"./getRadiusAndStrokeWidthFromDot-FqqM7_gr.js";import"./ActiveShapeUtils-C-4luYKV.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DqwYXNcz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const nt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const st=["TickPositioning"];export{r as TickPositioning,st as __namedExportsOrder,nt as default};
