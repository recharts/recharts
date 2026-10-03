import{R as e}from"./iframe-D0XP5FT3.js";import{R as i}from"./zIndexSlice-D8-60lXw.js";import{C as n}from"./ComposedChart-CmUditNM.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-D1psUlAt.js";import{X as s}from"./XAxis-CdyvwiuA.js";import{Y as c}from"./YAxis-CqyPAKzA.js";import{L as d}from"./Line-B9I3Ywm0.js";import{R as g}from"./ReferenceLine-BYmA7cNE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-z8Ap2dYF.js";import"./index-BIEuecVB.js";import"./index-CS8PxtTR.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DjekxJOz.js";import"./isWellBehavedNumber-Ceh04LdS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BDDfTGvW.js";import"./axisSelectors-D4AJEAvo.js";import"./d3-scale-DGDSvNHr.js";import"./index-C2YY5PF9.js";import"./index-D5oWhNFN.js";import"./renderedTicksSlice-BOt15qXr.js";import"./index-a0gINIJJ.js";import"./CartesianChart-B85ukqJW.js";import"./chartDataContext-BcyL-ikw.js";import"./CategoricalChart-w8Ip9gJm.js";import"./CartesianAxis-DAZGCNlj.js";import"./Layer-Bdc6UUg3.js";import"./Text-D0tua1LJ.js";import"./DOMUtils-CiVsTIiM.js";import"./useId-CfurG6Ob.js";import"./useBackwardsCompatibleTheme-CnQkr5Gq.js";import"./Label-CLcGGCVq.js";import"./ZIndexLayer-CZS0piq5.js";import"./types-C9t2smuM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-IiThPwuE.js";import"./step-dzRymlPB.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BLak8TNm.js";import"./useAnimationId-DjrvOMwt.js";import"./ActivePoints-BDZ1Wot0.js";import"./Dot-slsYh-CE.js";import"./RegisterGraphicalItemId-HdNBGK70.js";import"./ErrorBarContext-IzNwiufM.js";import"./GraphicalItemClipPath-iiifM8JF.js";import"./SetGraphicalItem-CSNZjUhi.js";import"./getRadiusAndStrokeWidthFromDot-Cl1UrcqK.js";import"./ActiveShapeUtils-Da2wOC1_.js";import"./useGraphicalItemIdentity-DszFn3dP.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
