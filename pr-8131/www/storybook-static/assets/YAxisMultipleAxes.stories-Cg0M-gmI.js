import{R as t}from"./iframe-N2_k56Bi.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BWNeCe4E.js";import{R as l}from"./zIndexSlice-C2n8MH5C.js";import{C as x}from"./ComposedChart-BNYP_tMQ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CUu0J6A4.js";import{L as a}from"./Line-tLQ2ur7I.js";import{X as c}from"./XAxis-BMzjraU8.js";import{T as g}from"./Tooltip-BDDIA8Ue.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BtTjy9h1.js";import"./Text-CtPksR9D.js";import"./resolveDefaultProps-DqwpxfQ6.js";import"./DOMUtils-DcUCUVaa.js";import"./ZIndexLayer-C9mVRhjd.js";import"./index-DW0bz290.js";import"./index-CE3twcP3.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BJLn-yPG.js";import"./throttle-wqOW3oZ2.js";import"./axisSelectors-CAEFlKfw.js";import"./d3-scale-BXPoqAuA.js";import"./CartesianAxis-DPQ0rx3G.js";import"./Layer-CJpZrgpd.js";import"./types-DGUdIwXy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-tTdjxG_s.js";import"./index-BDOvrbcw.js";import"./index-C9ctZ6JT.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Dp1Mzfqy.js";import"./index-ByH8O9KC.js";import"./fillDefinitions-dJCuHQYF.js";import"./CartesianChart-CoYa15-4.js";import"./ZIndexPortal-C8tnP8Pm.js";import"./CategoricalChart-CrnXV7kh.js";import"./LabelList-CpgHxPqB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Eo0dQZG0.js";import"./useAnimationId-LBywhlWd.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CdIqoiTp.js";import"./tooltipContext-CmP3xgFk.js";import"./dataEntryStyles-C-YlvJRH.js";import"./ErrorBarContext-BEo9CD_X.js";import"./activeStyles-CM4N_FMo.js";import"./SetGraphicalItem-CsZSO0ag.js";import"./getZIndexFromUnknown-DNtk-XxJ.js";import"./useEffectiveDataKey-D760KGHv.js";import"./omit-vRglqRCY.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DgWUxnsC.js";import"./step-DyI48c2G.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DdYZUJkv.js";import"./Dot-D37s9B75.js";import"./Symbols-jQ5nGruQ.js";import"./symbol-tKDu3Sq7.js";import"./getRadiusAndStrokeWidthFromDot-BENo0Gmv.js";import"./useElementOffset-Dty61qI9.js";import"./uniqBy-BVd7MjX-.js";import"./iteratee-BfkazSyy.js";import"./Cross-Nwb4qvZ9.js";import"./Sector-BN8zQzmu.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
