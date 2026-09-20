import{R as t}from"./iframe-DqQsSS-D.js";import{R as m}from"./zIndexSlice-DEwzQEF1.js";import{L as s}from"./LineChart-CQEfR4n3.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CDjjcyDk.js";import{X as l}from"./XAxis-BKSYmnyE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dfb6FQUp.js";import"./index-Dbmbbyfr.js";import"./index-DhKVfvgy.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BBiJzE-S.js";import"./isWellBehavedNumber-DnbbC0Ec.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DFStnfMW.js";import"./axisSelectors-B52U77Z-.js";import"./d3-scale-DCqqE6RI.js";import"./index-B8fZ1s7u.js";import"./index-B4bGAE3u.js";import"./renderedTicksSlice-TJkJQb3w.js";import"./index-O7IqxgVs.js";import"./CartesianChart-DxivySAt.js";import"./chartDataContext-BlgeEOzh.js";import"./CategoricalChart-BaEimrAw.js";import"./Layer-D_OCfv3y.js";import"./Curve-u85x6jSW.js";import"./types-Dtf5SFP2.js";import"./step-B0zbwdDt.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DE7FMoaT.js";import"./Label-B79akpip.js";import"./Text-C5ELFOWd.js";import"./DOMUtils-DfpUN1kn.js";import"./useId-CY4qsl1d.js";import"./useBackwardsCompatibleTheme-BgrGij6q.js";import"./ZIndexLayer-CAYm_Ybv.js";import"./useAnimationId-YdFm9roE.js";import"./ActivePoints-CoFSOxUI.js";import"./Dot-mDqKU7lL.js";import"./RegisterGraphicalItemId-B_u3-RKa.js";import"./ErrorBarContext-Bvj5AtLG.js";import"./GraphicalItemClipPath-CH5UCRjx.js";import"./SetGraphicalItem-DiUOXkHE.js";import"./getRadiusAndStrokeWidthFromDot-C_whAPwi.js";import"./ActiveShapeUtils-_QhNTD3X.js";import"./useGraphicalItemIdentity-DdD2mi7M.js";import"./CartesianAxis-BYaiVNcC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
