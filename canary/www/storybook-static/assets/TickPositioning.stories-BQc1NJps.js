import{R as t}from"./iframe-BbNtNwCn.js";import{R as m}from"./zIndexSlice-VrNRi_G1.js";import{L as s}from"./LineChart-DH9jb3tJ.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-HubJkyzh.js";import{X as l}from"./XAxis-oTutdnda.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BKFxohT3.js";import"./index-75aciM30.js";import"./index-DDphzaTv.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DhM2CAPd.js";import"./isWellBehavedNumber-uY0CIhkC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DE-VI6iZ.js";import"./axisSelectors-BzyIizHG.js";import"./d3-scale-Dkbi5OyZ.js";import"./index-BSdVWAmb.js";import"./index-Cs8MvahU.js";import"./renderedTicksSlice-DIxEy3cM.js";import"./index-gTTJo4-y.js";import"./CartesianChart-D4DHjPEA.js";import"./chartDataContext-DlNjoonA.js";import"./CategoricalChart-B7Or92Hs.js";import"./Layer-DFZlw494.js";import"./Curve-IZX4MWkA.js";import"./types-fRbVNPnq.js";import"./step-CORgqai8.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-LXQvjRXM.js";import"./Label-Bi0vIQjw.js";import"./Text-jR3JJSu6.js";import"./DOMUtils-DKOsv_Gf.js";import"./useId-CYI9mRcC.js";import"./useBackwardsCompatibleTheme-w385Ylxa.js";import"./ZIndexLayer-CAj7_5Sx.js";import"./useAnimationId-CCouJXLZ.js";import"./ActivePoints-BWe-WnoU.js";import"./Dot-xDiH-N__.js";import"./RegisterGraphicalItemId-D25ry5r7.js";import"./ErrorBarContext-Cr3z4FFd.js";import"./GraphicalItemClipPath-B5iQtC38.js";import"./SetGraphicalItem-C_2GZMjS.js";import"./getRadiusAndStrokeWidthFromDot-3xOb0JOi.js";import"./ActiveShapeUtils-CArN8SR1.js";import"./useGraphicalItemIdentity-DD2NYUwk.js";import"./CartesianAxis-Ccs4Ad33.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
