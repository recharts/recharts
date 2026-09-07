import{R as t}from"./iframe-CnWp8UDJ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-1jz_kHbZ.js";import{R as l}from"./zIndexSlice-Bxeoa1fM.js";import{C as x}from"./ComposedChart-DhJ0H7PO.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BstaJWq-.js";import{L as a}from"./Line-B_yZhlkz.js";import{X as c}from"./XAxis-ChzUm0qK.js";import{T as g}from"./Tooltip-JJZ65NIh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-WwV9YhCJ.js";import"./Text-B0OOyN3r.js";import"./resolveDefaultProps-omDmhEQP.js";import"./DOMUtils-CiASkXFs.js";import"./isWellBehavedNumber-B6aemPPP.js";import"./useId-EGP6ZE8R.js";import"./useBackwardsCompatibleTheme-UXRLdwDp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BZ4idX5Z.js";import"./index-39D9i7_F.js";import"./index-Data0V-G.js";import"./RechartsWrapper-BLeW-6qK.js";import"./axisSelectors-LX60wKXF.js";import"./throttle-aLzKR_Gj.js";import"./d3-scale-C7Jq6zIj.js";import"./index-gtYqs59B.js";import"./index-Dehtp_44.js";import"./renderedTicksSlice-BKgb7qhp.js";import"./index-Doynhu3_.js";import"./CartesianAxis-CwBaIU9L.js";import"./Layer-C_mDLxAs.js";import"./types-BIFao3Et.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DsDmw2jX.js";import"./chartDataContext-CO0CX1GC.js";import"./CategoricalChart-CM4dP2j4.js";import"./AnimatedItems-Dbq_Hz9T.js";import"./useAnimationId-Maj24DOj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DC-Ff8xS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BhVsu49r.js";import"./tooltipContext-DuMf8ZTT.js";import"./RegisterGraphicalItemId-F3i4J8HM.js";import"./ErrorBarContext-CnG1miAN.js";import"./GraphicalItemClipPath-BoXmuKsm.js";import"./SetGraphicalItem-BDu63G4F.js";import"./getZIndexFromUnknown-CJGruWSQ.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CTYaIKnf.js";import"./Curve-BQDaiCsn.js";import"./step-4VYt7eZC.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C5ifQD97.js";import"./Dot-CVjhwEFH.js";import"./getRadiusAndStrokeWidthFromDot-DT21Og_Z.js";import"./useElementOffset-DBfXPX7X.js";import"./uniqBy-1fP4lO5S.js";import"./iteratee-DiGtiHzb.js";import"./Cross-BZojVn3K.js";import"./Sector-DhnExu7d.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
