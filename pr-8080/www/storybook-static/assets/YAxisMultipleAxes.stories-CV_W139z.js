import{R as t}from"./iframe-CrWtoPAX.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-xU-pi3Qa.js";import{R as l}from"./zIndexSlice-DMPrIjTD.js";import{C as x}from"./ComposedChart-CrLeVh0b.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CqrMZ8nV.js";import{L as a}from"./Line-x9GU49wt.js";import{X as c}from"./XAxis-6CbcM3Se.js";import{T as g}from"./Tooltip-CZyZKcRt.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-9ANtnaX1.js";import"./Text-CyQrUZZg.js";import"./resolveDefaultProps-Cl_vq3lE.js";import"./pageBackground-B_OyKJz4.js";import"./useId-CevBbkmx.js";import"./ZIndexLayer-mnQ0PTjZ.js";import"./index-CQ_XqvtJ.js";import"./index-D6uwIsxD.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DnnAPhgk.js";import"./throttle-ByP8enHW.js";import"./dataEntryStyles-CcroDQaP.js";import"./axisSelectors-B0-aB2Y5.js";import"./d3-scale-Pq_E9xXF.js";import"./CartesianAxis-D6bXO0ci.js";import"./Layer-Bc-8Aj4A.js";import"./types-sEVDNypc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CetFWcek.js";import"./index-gHXYJ75j.js";import"./index-BbFlaPL7.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-MJk6C7sG.js";import"./index-IYAiXkdd.js";import"./CartesianChart--l1pMg4t.js";import"./chartDataContext-BATi9LfG.js";import"./CategoricalChart-CRgz8QMs.js";import"./activeStyles-D8qfovJq.js";import"./useAnimationId-DIVMX3ZS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CNbdX1IY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BHD3PSWQ.js";import"./tooltipContext-DgMOrrVJ.js";import"./RegisterGraphicalItemId-DIduc0Gm.js";import"./ErrorBarContext-BGhx7PeS.js";import"./SetGraphicalItem-B4ZcrH9I.js";import"./getZIndexFromUnknown-CBjIuuRk.js";import"./useEffectiveDataKey-DRFzjTt4.js";import"./omit-BCdzxml0.js";import"./isArguments-yB-y1yaH.js";import"./Curve-QjHrFrYT.js";import"./step-xie03U5d.js";import"./path-DyVhHtw_.js";import"./ActivePoints-cB0BOXIY.js";import"./Dot-BpyqQ2DG.js";import"./Symbols-BmauIne2.js";import"./symbol-C4lC381C.js";import"./getRadiusAndStrokeWidthFromDot-CuJjKg3J.js";import"./useElementOffset-VqEKxajU.js";import"./uniqBy-CQj06pFN.js";import"./iteratee-DXOgM9Ce.js";import"./Cross-Nl2ZcA6z.js";import"./Sector-D_zKCeqT.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
