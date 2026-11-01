import{R as t}from"./iframe-CrYQDt8P.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Ibw-9rE8.js";import{R as l}from"./zIndexSlice-DgBq9YFj.js";import{C as x}from"./ComposedChart-D3_qR-0w.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-EyEs2QDc.js";import{L as a}from"./Line-DP1Q7foL.js";import{X as c}from"./XAxis-ZRzZ6JbG.js";import{T as g}from"./Tooltip-Dov3wQN7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-_UeQKQwH.js";import"./Text-BvJLtM_q.js";import"./resolveDefaultProps-D-FE3-Id.js";import"./DOMUtils-Bh62H6aW.js";import"./ZIndexLayer-Dl5u_ANg.js";import"./index-DoHXxeqs.js";import"./index-Dn-vKA7B.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-qncpG9DL.js";import"./throttle-EZYco_S-.js";import"./axisSelectors-CHapoDkY.js";import"./d3-scale-B8VX6HZY.js";import"./CartesianAxis-DR-jLyCK.js";import"./Layer-BQFOl3cJ.js";import"./types-D5M-0McJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B5w1ipks.js";import"./index-DrQ3dvqS.js";import"./index-xzmL1NPl.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BAwtrVn5.js";import"./index-OoIkvEPu.js";import"./fillDefinitions-B8rJsHrn.js";import"./CartesianChart-CUqOA5qE.js";import"./ZIndexPortal-Dn8m52P0.js";import"./CategoricalChart-BGIsMW5j.js";import"./LabelList-C_2TXPHb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BrqfjGXb.js";import"./useAnimationId-DhleLLtl.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DxrQGdht.js";import"./tooltipContext-aOt1cndd.js";import"./dataEntryStyles-D63lSB48.js";import"./ErrorBarContext-BkAsJpXU.js";import"./activeStyles-C1vUddIu.js";import"./SetGraphicalItem-BZH_NFgg.js";import"./getZIndexFromUnknown-CucohxNg.js";import"./useEffectiveDataKey-CniHgm4C.js";import"./omit-DXLoxxTI.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D-a7nqUy.js";import"./step-DGjeaFMT.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CSQF1wsy.js";import"./Dot-GBqckkZQ.js";import"./Symbols-BEXEibvH.js";import"./symbol-_3oqr1nj.js";import"./getRadiusAndStrokeWidthFromDot-nu59-3In.js";import"./useElementOffset-BR2Z5pZe.js";import"./uniqBy-CuoQtKoh.js";import"./iteratee-9w6c29G1.js";import"./Cross-6AmbnwV4.js";import"./Sector-Bm50MfLq.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
