import{R as t}from"./iframe-B5EBEutQ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-US4huNHY.js";import{R as l}from"./zIndexSlice-BS5hvVSM.js";import{C as x}from"./ComposedChart-BL8Vy27a.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-NKit9PFb.js";import{L as a}from"./Line-CtFf5VG7.js";import{X as c}from"./XAxis-C0OgGT6V.js";import{T as g}from"./Tooltip-C4-fT2EA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Bho88syw.js";import"./Text-BVXkgzAF.js";import"./resolveDefaultProps-CBLh7NYz.js";import"./DOMUtils-EesDyIQg.js";import"./ZIndexLayer-2f9RfWsU.js";import"./index-C_XmK0o8.js";import"./index-C5geO6kL.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CqmKpuRO.js";import"./throttle-B9WW5VMA.js";import"./axisSelectors-CLoHgdoC.js";import"./d3-scale-iNRnE1hH.js";import"./CartesianAxis-7YbWTN27.js";import"./Layer-BYAjyABW.js";import"./types-BmtCPhIx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B_QLVgTg.js";import"./index-BF-QrOX1.js";import"./index-DOPYkGg1.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BC-brhau.js";import"./index-DxeJdFG6.js";import"./fillDefinitions-FU64iHqp.js";import"./CartesianChart-YkNn32dh.js";import"./ZIndexPortal-D0P5glPn.js";import"./CategoricalChart-DwIu15RM.js";import"./LabelList-BsIU2Cho.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BZKbEhjO.js";import"./useAnimationId-5jS9WdgM.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CrbC1Zls.js";import"./tooltipContext-KHm7eipe.js";import"./dataEntryStyles-DbY2Nm9f.js";import"./ErrorBarContext-dLbqY2mz.js";import"./activeStyles-CuQ8L2cy.js";import"./SetGraphicalItem-WzwPCAJ5.js";import"./getZIndexFromUnknown-6-_TCKzY.js";import"./useEffectiveDataKey-BNkN63Yq.js";import"./omit-DYVbvTBJ.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Di7q2eVu.js";import"./step-DSuuF4zz.js";import"./path-DyVhHtw_.js";import"./ActivePoints-GUWB2UUS.js";import"./Dot-DmpikD8L.js";import"./Symbols-BFE2HVM6.js";import"./symbol-Uauys67f.js";import"./getRadiusAndStrokeWidthFromDot-BJYN0Za2.js";import"./useElementOffset-5ftWeo_0.js";import"./uniqBy-tVD2kZAe.js";import"./iteratee-Cg-J5YFs.js";import"./Cross-CMwNYQDS.js";import"./Sector-D9Oq45ev.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
