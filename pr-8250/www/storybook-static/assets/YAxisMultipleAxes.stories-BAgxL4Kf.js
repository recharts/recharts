import{R as t}from"./iframe-WBbNNnuy.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-BvxL6veE.js";import{R as l}from"./zIndexSlice-tUIWaJXi.js";import{C as x}from"./ComposedChart-5JnVr7Ht.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-_w1CetyC.js";import{L as a}from"./Line-By_II2b6.js";import{X as c}from"./XAxis-D4ryVEq0.js";import{T as g}from"./Tooltip-DO_kcQZm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-C7oootOX.js";import"./Text-BMtYTGtz.js";import"./resolveDefaultProps-BQVAzGvB.js";import"./ZIndexLayer-BKvRHpsJ.js";import"./index-r4gbZ-og.js";import"./index-lLL3p07g.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BgsSPbjL.js";import"./throttle-BZsWSkxT.js";import"./axisSelectors-BsjG_ZcL.js";import"./d3-scale-BmTpsTXt.js";import"./CartesianAxis-d7TJLpW4.js";import"./Layer-B9NKZG1g.js";import"./types-DJHF32C4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dwvf-gTi.js";import"./index-Z7LA0nwu.js";import"./index-DfAsO6-W.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-KCZFV5Qp.js";import"./index-UohdA6tU.js";import"./fillDefinitions-mDThsQp_.js";import"./CartesianChart-CMzbfvn4.js";import"./chartDataContext-FFlBnRja.js";import"./CategoricalChart-DYbe0UIE.js";import"./dataEntryStyles-DB--RtiY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B8WyH4x0.js";import"./useAnimationId-Cxl9dyaW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DuPu1Vop.js";import"./tooltipContext-xwEZLSIE.js";import"./ErrorBarContext-DyCR_fdR.js";import"./activeStyles-CA5Mddf7.js";import"./SetGraphicalItem-TF5VFMkr.js";import"./getZIndexFromUnknown-CY5LGFIY.js";import"./useEffectiveDataKey-CNDMCH51.js";import"./omit-DDgCfzm_.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-BJbGVYFk.js";import"./Curve-DgOptS1N.js";import"./step-sID4B3fn.js";import"./path-BBMZd4YL.js";import"./ActivePoints-CufioKrW.js";import"./Dot-CWYAFnGF.js";import"./Symbols-BMJzxDY-.js";import"./symbol-Cy3OnQKT.js";import"./useElementOffset-BXgxBoqY.js";import"./uniqBy-CZ2AwJLU.js";import"./iteratee-ZB0s3k9M.js";import"./Cross-CGrYZ8gF.js";import"./Sector-A4RtaUVu.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
