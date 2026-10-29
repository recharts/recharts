import{R as t}from"./iframe-BWDOX6-u.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CmY1zbsh.js";import{R as l}from"./zIndexSlice-DNz64E0x.js";import{C as x}from"./ComposedChart-CBeAkuvH.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-gQweS-Ob.js";import{L as a}from"./Line-CuDWoKpi.js";import{X as c}from"./XAxis-Bg1rIWpH.js";import{T as g}from"./Tooltip-E8YPsfxS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-C7PH8HeI.js";import"./Text-BC76d3cf.js";import"./resolveDefaultProps-BcUHQ_F5.js";import"./pageBackground-B9VN7P3l.js";import"./ZIndexLayer-BpYNbZQ_.js";import"./index-DzgZ7zsu.js";import"./index-DnIYcPIz.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DK35yTF0.js";import"./throttle-CylvlJBG.js";import"./axisSelectors-DEg5_gPJ.js";import"./d3-scale-B4wSjZj4.js";import"./CartesianAxis-DBuYWNnG.js";import"./Layer-DzTaBPhB.js";import"./types-Kg6mNYCQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BqxX5aIt.js";import"./index-BJ2UcSZQ.js";import"./index-w7-d2vln.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BRyXUEk1.js";import"./index-KUhAAXQC.js";import"./CartesianChart-BPCuN6sc.js";import"./ZIndexPortal-BU5aU1wi.js";import"./CategoricalChart--0r08YsN.js";import"./LabelList-Bpfp_vOc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-YmvaNl9F.js";import"./useAnimationId-DnCcjn8H.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-7f2VgziP.js";import"./tooltipContext-Bo8jdiGb.js";import"./dataEntryStyles-BX1vU1kO.js";import"./ErrorBarContext-CMdxFUFX.js";import"./activeStyles-1bnNLlnc.js";import"./SetGraphicalItem-DERdfH3j.js";import"./getZIndexFromUnknown-BXf84R5E.js";import"./useEffectiveDataKey-D_c8pfvC.js";import"./omit-BFXhOTRO.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CrU39aeO.js";import"./step-Cs1Ofcpa.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CMBx6Neg.js";import"./Dot-BD2cxhmc.js";import"./Symbols-BzcCXNpL.js";import"./symbol-X6QlfoW2.js";import"./getRadiusAndStrokeWidthFromDot-02xZ6iGX.js";import"./useElementOffset-DDtS6U3Q.js";import"./uniqBy-BH4YjQyG.js";import"./iteratee-CCjAiajQ.js";import"./Cross-Bp6FZ5qp.js";import"./Sector-D4IBl-dY.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
