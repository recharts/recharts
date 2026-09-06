import{R as t}from"./iframe-C98xM-14.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CaqCP2Lk.js";import{R as l}from"./zIndexSlice-PFqQVngT.js";import{C as x}from"./ComposedChart-DEvNrsRG.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DyAmsiQM.js";import{L as a}from"./Line-vvPtX59c.js";import{X as c}from"./XAxis-CsWwdt7Q.js";import{T as g}from"./Tooltip-CcjpX53J.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-6WZ-bs73.js";import"./Text-CdsOrPG8.js";import"./resolveDefaultProps-BpgNO45K.js";import"./DOMUtils-Cyba50bX.js";import"./isWellBehavedNumber-B0B1V1Mw.js";import"./useId-gkj8hVD1.js";import"./useBackwardsCompatibleTheme-CnvikNkE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-_jlJOhPE.js";import"./index-BfkVHUSN.js";import"./index-lWYWFl_c.js";import"./RechartsWrapper-DNpWLRvv.js";import"./axisSelectors-DE9vQUUE.js";import"./throttle-Cpn-KPW0.js";import"./d3-scale-BIaFt0TH.js";import"./index-B33qjCts.js";import"./index-CRw9oTKs.js";import"./renderedTicksSlice-BVBdj9en.js";import"./index-Bwd0n8ve.js";import"./CartesianAxis-BhBvKKe-.js";import"./Layer-DV2USN9H.js";import"./types-C3nHa31Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DdfFkL89.js";import"./chartDataContext-BX4jELOi.js";import"./CategoricalChart-Cg6rdWul.js";import"./AnimatedItems-CTflnzuI.js";import"./useAnimationId-B6O86EG4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-EqmP3HLD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-bQFjdaPv.js";import"./tooltipContext-CWvdZnjM.js";import"./RegisterGraphicalItemId-CrKJMoiy.js";import"./ErrorBarContext-eOyXWxlr.js";import"./GraphicalItemClipPath-Dn-XuIGK.js";import"./SetGraphicalItem-CJTGWUG8.js";import"./getZIndexFromUnknown-LWe_bofs.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BPErp3cx.js";import"./Curve-C4kxUnUy.js";import"./step-CKRTH0G6.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bm8Ngiah.js";import"./Dot-BVHRbG7p.js";import"./getRadiusAndStrokeWidthFromDot-BCR9SUwJ.js";import"./useElementOffset-BwcDYxj_.js";import"./uniqBy-KZWDygXq.js";import"./iteratee-CBQ5EdUG.js";import"./Cross-CmEoGz0N.js";import"./Sector-BcT2aBee.js";const Rt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Lt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
