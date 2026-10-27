import{R as t}from"./iframe-CEQushtN.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CO7P54oT.js";import{R as l}from"./zIndexSlice-DjNM_HLz.js";import{C as x}from"./ComposedChart-BlLv9QRG.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C4c1-X5W.js";import{L as a}from"./Line-RGSptLoh.js";import{X as c}from"./XAxis-Dox0Mf_6.js";import{T as g}from"./Tooltip-DODsXuho.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CFJJzt7V.js";import"./Text-CmoBCOlM.js";import"./resolveDefaultProps-CyZKvMPR.js";import"./pageBackground-QlEa7JV2.js";import"./ZIndexLayer-DtsqWk3z.js";import"./index-BtHOWWHr.js";import"./index-Dij9Lyzg.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-S5DqA3LI.js";import"./throttle-D-s41lqW.js";import"./dataEntryStyles-BlFVEHbT.js";import"./axisSelectors-DQduFkeJ.js";import"./d3-scale-BWM46Ydz.js";import"./CartesianAxis-Df5o-IJd.js";import"./Layer-C3v_EKIk.js";import"./types-CPVpRlsk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BiOzFX7m.js";import"./index-BdO45VT9.js";import"./index-CoxdILWo.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DXBxSHCJ.js";import"./index-BB4PCvH7.js";import"./CartesianChart-BcxOd9Ut.js";import"./ZIndexPortal-pBjad6tL.js";import"./CategoricalChart-gEK0X1ot.js";import"./LabelList-DwlBaftj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CdiELTU5.js";import"./useAnimationId-CzbeFnj4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D8RrSuBC.js";import"./tooltipContext-CiX2UjUA.js";import"./RegisterGraphicalItemId-CVBDPhvw.js";import"./ErrorBarContext-CpznhA_J.js";import"./activeStyles-6x5lKRrB.js";import"./SetGraphicalItem-D60Grc7B.js";import"./getZIndexFromUnknown-BWbvic_t.js";import"./useEffectiveDataKey-BKKYPJCk.js";import"./omit-Cq07IlM6.js";import"./isArguments-yB-y1yaH.js";import"./Curve-C2Lci0Z6.js";import"./step-BbPJEBHq.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DJ2RJcRF.js";import"./Dot-CuIjyWbv.js";import"./Symbols-C3N2Nfx0.js";import"./symbol-DSj-rHxT.js";import"./getRadiusAndStrokeWidthFromDot-CzdVPXFS.js";import"./useElementOffset-DWKbuRf4.js";import"./uniqBy-DDpW34LG.js";import"./iteratee-DFqopvcF.js";import"./Cross-DRP4fofn.js";import"./Sector-BXpIIm1p.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
