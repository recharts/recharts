import{R as t}from"./iframe-CQz631Nk.js";import{R as n}from"./zIndexSlice-BiY29BHb.js";import{L as s}from"./LineChart-BM-J_GGw.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CQpvxMmw.js";import{X as l}from"./XAxis-DHy0v3jD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-tlVaut9a.js";import"./index-DCbtYhHK.js";import"./index-CDndXHyS.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BsWR9NdC.js";import"./isWellBehavedNumber-B7MN_LAX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Btix0jtf.js";import"./axisSelectors-SdSrtuX_.js";import"./d3-scale-DbP7sHTP.js";import"./index-BlfYBgju.js";import"./index-w2pZ54DA.js";import"./renderedTicksSlice-lkRk7heP.js";import"./index-CUVgoBSt.js";import"./CartesianChart-WE1bkj_w.js";import"./chartDataContext-ef-S8XKm.js";import"./CategoricalChart-6rYejfBQ.js";import"./Layer-DGn6U-cs.js";import"./Curve-B1Y35Tq4.js";import"./types-qf3XACEN.js";import"./step-DM9ed4F2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B3DzMe78.js";import"./Label-DQhaNgKG.js";import"./Text-CpmwLb5H.js";import"./DOMUtils-V3cEDC71.js";import"./useId-BSAAHf1D.js";import"./useBackwardsCompatibleTheme-DhqH6-Ub.js";import"./ZIndexLayer-LgQGURcB.js";import"./useAnimationId-DN0POjqt.js";import"./ActivePoints-BbCYqZ1B.js";import"./Dot-Br265cWC.js";import"./RegisterGraphicalItemId-Bdyk4ltG.js";import"./ErrorBarContext-BVC7bug8.js";import"./GraphicalItemClipPath-Db7czniJ.js";import"./SetGraphicalItem-DLB5o72P.js";import"./getRadiusAndStrokeWidthFromDot-CtkJeIr5.js";import"./ActiveShapeUtils-BfK0DvMY.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Dd11BP7Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const nt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
