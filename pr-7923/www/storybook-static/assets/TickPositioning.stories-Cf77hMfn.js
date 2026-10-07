import{R as t}from"./iframe-BMzdo2OO.js";import{R as m}from"./zIndexSlice-ChqivVgc.js";import{L as s}from"./LineChart-Dxw0wxPn.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-HvZ-B3uy.js";import{X as l}from"./XAxis-D0FZw3tk.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bn5L-Spy.js";import"./index-DcvaXuoD.js";import"./index-CuowPYJL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DMOVc-U0.js";import"./isWellBehavedNumber-BxxKk3_X.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DZyZLCSd.js";import"./axisSelectors-DePv-gjT.js";import"./d3-scale-FRN-50hy.js";import"./index-IxxRTzdH.js";import"./index-BBWSU8H0.js";import"./renderedTicksSlice-D7KSBl5-.js";import"./index-QGNmKXB_.js";import"./CartesianChart-CJTLTCmg.js";import"./chartDataContext-D12dRZ2D.js";import"./CategoricalChart-DgT48bow.js";import"./Layer-DI_tMp3J.js";import"./Curve--AxPXvQm.js";import"./types-XidxuGSX.js";import"./step-C6IWo9eW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-aWQxtrPp.js";import"./Label-DXGFYQ6y.js";import"./Text-BUhrLoyp.js";import"./DOMUtils-CENQr-dm.js";import"./useId-CISxasqF.js";import"./useBackwardsCompatibleTheme-COHZZMqy.js";import"./ZIndexLayer-J0q0oOXM.js";import"./useAnimationId-DMkWUgfv.js";import"./ActivePoints-DbFNvnJX.js";import"./Dot-C8FkbxSc.js";import"./RegisterGraphicalItemId-CdkGqZbg.js";import"./ErrorBarContext-Dvnk9Osp.js";import"./GraphicalItemClipPath-jODxuvX2.js";import"./SetGraphicalItem-fUYBwl3z.js";import"./getRadiusAndStrokeWidthFromDot-CrQ8YxTR.js";import"./ActiveShapeUtils-P-2_LOiD.js";import"./useGraphicalItemIdentity-p0tnB9lX.js";import"./CartesianAxis-BwqV9jtY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,st as __namedExportsOrder,mt as default};
