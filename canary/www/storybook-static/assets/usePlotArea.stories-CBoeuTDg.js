import{R as t}from"./iframe-GEWoEgYU.js";import{j as a}from"./RechartsWrapper-DUhcDKTP.js";import{R as p}from"./zIndexSlice-m50y9bt7.js";import{C as n}from"./ComposedChart-CcuEmYol.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-JrrQ0b5K.js";import{X as l}from"./XAxis-BNnHyyR6.js";import{Y as h}from"./YAxis-Do1ezRev.js";import{L as c}from"./Legend-Baxiyi7r.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DpAlDskP.js";import"./get-C2VjdU0L.js";import"./axisSelectors-3BecUZh2.js";import"./throttle-DQWr01n7.js";import"./index-jF3_l_DR.js";import"./index-BmM7Rlr-.js";import"./isWellBehavedNumber-Btl-gf2F.js";import"./d3-scale-DtRX2T9P.js";import"./index-BTro793U.js";import"./index-BkcefAXR.js";import"./renderedTicksSlice-Cm6mh1F9.js";import"./index-xNr63OGc.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D7rp_ejt.js";import"./chartDataContext-BO36yNvS.js";import"./CategoricalChart-B9B91N22.js";import"./Layer-B28G2hIY.js";import"./Curve-BIh3ht4a.js";import"./types-BibJ3Nmg.js";import"./step-CWzaE13R.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BGlMg_gS.js";import"./Label-BrqW8KDJ.js";import"./Text-DisRgGpM.js";import"./DOMUtils-_s9ELKXC.js";import"./useId-CSqY47p_.js";import"./useBackwardsCompatibleTheme-CDx1dLi4.js";import"./ZIndexLayer-UqU4qgkO.js";import"./useAnimationId-DCtzAZ-Q.js";import"./ActivePoints-DTY2TMLV.js";import"./Dot-DbC-8y4h.js";import"./RegisterGraphicalItemId-oyNCw2MY.js";import"./ErrorBarContext-n9OrelsP.js";import"./GraphicalItemClipPath-CQvdMfqc.js";import"./SetGraphicalItem-CiQmIVfI.js";import"./getRadiusAndStrokeWidthFromDot-COR5YxZm.js";import"./ActiveShapeUtils-Bfg_gjnw.js";import"./useGraphicalItemIdentity-CuKg9Fcq.js";import"./CartesianAxis-DN5o5nX3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BS2jIWeJ.js";import"./symbol-CcpcFect.js";import"./useElementOffset-sZ_quz8S.js";import"./uniqBy-D4LQ95gw.js";import"./iteratee-uHmSd5oe.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
