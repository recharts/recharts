import{R as t}from"./iframe-2CSQwnzh.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CGxWNSi-.js";import{R as l}from"./zIndexSlice-BFAyLu2K.js";import{C as x}from"./ComposedChart-Drp8NLPv.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CF2fkP6o.js";import{L as a}from"./Line-DawadGfv.js";import{X as c}from"./XAxis-Q_FxDFmH.js";import{T as g}from"./Tooltip-DueAtotn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-B1LfcQH3.js";import"./Layer-whPw80AU.js";import"./resolveDefaultProps-BHTXK_Jm.js";import"./Text-D8BcLzfv.js";import"./DOMUtils-CR7HkqrI.js";import"./isWellBehavedNumber-Dcam8SOU.js";import"./Label-BgiiW0df.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BmQ9stZJ.js";import"./index-Cea4V0if.js";import"./index-DaE0ahnp.js";import"./types-Co_C0j8x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-HMFum7ql.js";import"./throttle-D6AnBAnr.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DBVst9hu.js";import"./index-cEZOrgfU.js";import"./index-DiEzMPwb.js";import"./axisSelectors-svppWMH6.js";import"./d3-scale-Dt9cpg9w.js";import"./CartesianChart-DSNUg0OG.js";import"./chartDataContext-CjOi85nN.js";import"./CategoricalChart-DtXBMgKk.js";import"./tooltipContext-C3F9nzcw.js";import"./AnimatedItems-Ba6tXj_A.js";import"./useAnimationId-CkCcxDPT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BogSoKYG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CiureFp6.js";import"./RegisterGraphicalItemId-D-cwWngY.js";import"./ErrorBarContext-B19vexPG.js";import"./GraphicalItemClipPath-DcZNtOEm.js";import"./SetGraphicalItem-DiGKkNAO.js";import"./getZIndexFromUnknown-BEj2dVmx.js";import"./graphicalItemSelectors-CLyvKTVM.js";import"./Curve-BVeBGaCZ.js";import"./step-cLfMjHgU.js";import"./path-DyVhHtw_.js";import"./ActivePoints-fb37GVPw.js";import"./Dot-D2O1VtDH.js";import"./getRadiusAndStrokeWidthFromDot-DvI-6mn5.js";import"./useElementOffset-CbQUl8ho.js";import"./uniqBy-BOeXWsaI.js";import"./iteratee-DeKV1h7S.js";import"./Cross-DRVUwuRK.js";import"./Sector-UcZahgCQ.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const vt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,vt as __namedExportsOrder,Yt as default};
