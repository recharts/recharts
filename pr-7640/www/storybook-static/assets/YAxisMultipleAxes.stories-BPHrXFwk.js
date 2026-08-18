import{R as t}from"./iframe-tjnA4ZJo.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BN_pqP4r.js";import{R as l}from"./zIndexSlice-C0N8aUUS.js";import{C as x}from"./ComposedChart-C0wVbOjh.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bkj_zqoU.js";import{L as a}from"./Line-Cwid8INE.js";import{X as c}from"./XAxis-C_h8MhtB.js";import{T as g}from"./Tooltip-CbkLMveH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CYvlsQvC.js";import"./Text-D3he8dQP.js";import"./resolveDefaultProps-Bpk1yIxn.js";import"./DOMUtils-Bpsfg4Oe.js";import"./isWellBehavedNumber-C0zpNc8z.js";import"./useBackwardsCompatibleTheme-WfOg4bTb.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-J8-hOCa0.js";import"./index-BTfui88R.js";import"./index-BBMNndk4.js";import"./RechartsWrapper-CWJ-Ct21.js";import"./index-BXBph9CX.js";import"./index-zHF4-EZF.js";import"./throttle-BG5Cbw48.js";import"./axisSelectors-kO8GHbei.js";import"./d3-scale-DO15g-NA.js";import"./renderedTicksSlice-cCRvnCrJ.js";import"./CartesianAxis-CBg_pQkI.js";import"./Layer-BffJbX--.js";import"./types-B1JXlqQN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Fpuc0WuY.js";import"./chartDataContext-Czgamfqs.js";import"./CategoricalChart-4thYKElI.js";import"./AnimatedItems-6MMSMcYJ.js";import"./useAnimationId-1S4zeXgZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Ckn9RlkE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D6_9Syl7.js";import"./tooltipContext-DwLel0lg.js";import"./RegisterGraphicalItemId-CPAkHit-.js";import"./ErrorBarContext-B_e3sY13.js";import"./GraphicalItemClipPath-CVEv0QyJ.js";import"./SetGraphicalItem-Bw7kOs9y.js";import"./getZIndexFromUnknown-CM5Y5EkK.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-aSOStWya.js";import"./Curve-CyJ2f9jM.js";import"./step-OCCE-5TJ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BiBnoeEb.js";import"./Dot-3hZpkGF4.js";import"./getRadiusAndStrokeWidthFromDot-CaYPlNA5.js";import"./useElementOffset-BodDkwvF.js";import"./uniqBy-n-0FIf0H.js";import"./iteratee-BlG9qfWt.js";import"./Cross-D4DCD1JZ.js";import"./Sector-CiC563Fg.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Mt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Mt as __namedExportsOrder,Kt as default};
