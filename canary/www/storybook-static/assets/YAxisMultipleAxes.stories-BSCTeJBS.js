import{R as t}from"./iframe-BquPZQZR.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DU99c4NY.js";import{R as l}from"./zIndexSlice-DfoMGwwJ.js";import{C as x}from"./ComposedChart-FnXBnX6v.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-nC6vNoFw.js";import{L as a}from"./Line-BUXIJhlS.js";import{X as c}from"./XAxis-B0NTBS_i.js";import{T as g}from"./Tooltip-iSktKwDP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-QfyPAwEN.js";import"./Text-Cz9Qm4K-.js";import"./resolveDefaultProps-C1-PhdLj.js";import"./DOMUtils-Hop2FGiK.js";import"./ZIndexLayer-BKwk9Ckz.js";import"./index-BeXk3gq4.js";import"./index-CY_4egx2.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bi2qo_WA.js";import"./throttle-Ifciv68t.js";import"./axisSelectors-Ra6SuVrn.js";import"./d3-scale-B2Z3tDr8.js";import"./CartesianAxis-G--oVlcc.js";import"./Layer-DgCLyWmw.js";import"./types-HVxQrabK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DkVmzd5W.js";import"./index-BBIQOsY9.js";import"./index-DeLNFakb.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BOh7Al31.js";import"./index-C389QzGe.js";import"./fillDefinitions-bKlUAuaq.js";import"./CartesianChart-DusmDSbk.js";import"./ZIndexPortal-ChcM8kac.js";import"./CategoricalChart-DY8SYWQ4.js";import"./LabelList-c67UtHfn.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BR95K4Qq.js";import"./useAnimationId-BAgUZZzE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B8wKgjG7.js";import"./tooltipContext-B_xO9A21.js";import"./dataEntryStyles-DcYBdp4K.js";import"./ErrorBarContext-LEjhprcI.js";import"./activeStyles-7MX0jGA5.js";import"./SetGraphicalItem-DVTOJBGj.js";import"./getZIndexFromUnknown-CiZWR6Xm.js";import"./useEffectiveDataKey-Dv0si8CY.js";import"./omit-BfnR89d3.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DPOrxZAK.js";import"./step-CUnUoUW9.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BzSHcWj6.js";import"./Dot-B5ySELDq.js";import"./Symbols-BOEhDLOF.js";import"./symbol-BytJGu2b.js";import"./getRadiusAndStrokeWidthFromDot-Dz2gbesP.js";import"./useElementOffset-v0E65nTN.js";import"./uniqBy-Dp4AeUu6.js";import"./iteratee-CvxwxQ4E.js";import"./Cross-BoFANieQ.js";import"./Sector-DnFLuyiy.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
