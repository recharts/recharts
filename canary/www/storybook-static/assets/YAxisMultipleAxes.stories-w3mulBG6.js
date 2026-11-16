import{R as t}from"./iframe-BCDSQyOo.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DnB_2g0Q.js";import{R as l}from"./zIndexSlice-CihbJEZu.js";import{C as x}from"./ComposedChart-DErsj6jf.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BjCB3HvL.js";import{L as a}from"./Line-ltW-vN8n.js";import{X as c}from"./XAxis-Bk5D6i9E.js";import{T as g}from"./Tooltip-D55SpDBY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-C128IvfG.js";import"./Text-RrCvwkND.js";import"./resolveDefaultProps-s8FlAHQv.js";import"./ZIndexLayer-PvoR44l1.js";import"./index-fM7uFcW2.js";import"./index-I1h0g8eb.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B-E8zUoJ.js";import"./throttle-D1lsoNSG.js";import"./axisSelectors-Cvi9anx3.js";import"./d3-scale-CYMX0yrb.js";import"./CartesianAxis-DeXvVTxW.js";import"./Layer-sje4p3Rc.js";import"./types-Czx6BcyQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-xgVyqeD0.js";import"./index-ClkyNFpC.js";import"./index-Q4jLEkfo.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BqnNMENS.js";import"./index-oH22xoCa.js";import"./fillDefinitions-LB53xD7z.js";import"./CartesianChart-CkJbsuu1.js";import"./chartDataContext-B0YZn_2w.js";import"./CategoricalChart-CNAFu95B.js";import"./dataEntryStyles-Dui-VolR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CFM8azDG.js";import"./useAnimationId-DOTZ38LK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHvAKsEu.js";import"./tooltipContext-DaGu1V0P.js";import"./ErrorBarContext-Cfqy-sXq.js";import"./activeStyles-BVEmlDAe.js";import"./SetGraphicalItem-CopBxnc9.js";import"./getZIndexFromUnknown-CtKDpY59.js";import"./useEffectiveDataKey-Chw-9k17.js";import"./omit-cgDoB3Ea.js";import"./isArguments-yB-y1yaH.js";import"./Curve-B6YhKAHC.js";import"./step-_U3fQ-Ri.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C5df2K_e.js";import"./Dot-DeEkJUDG.js";import"./Symbols-BhFpev2q.js";import"./symbol-BFQRYOt6.js";import"./getRadiusAndStrokeWidthFromDot-tbcff33p.js";import"./useElementOffset-BdQyjpik.js";import"./uniqBy-DshlIWW5.js";import"./iteratee-_elDKS4N.js";import"./Cross-CO7lcRDZ.js";import"./Sector-WK7tc2F5.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
