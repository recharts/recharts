import{R as t}from"./iframe-BmKqhsPF.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Bib3dbnh.js";import{R as l}from"./zIndexSlice-CBQM2Gyg.js";import{C as x}from"./ComposedChart-DkiFuqQR.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar--SOdbZe-.js";import{L as a}from"./Line-DFSz05PX.js";import{X as c}from"./XAxis-B1Y97cNG.js";import{T as g}from"./Tooltip-DwZsicEu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DJuyIpr6.js";import"./Text-CrMJTYNw.js";import"./resolveDefaultProps-BDqp1YKl.js";import"./DOMUtils-DtycWmz8.js";import"./ZIndexLayer-E2zC26PS.js";import"./index-3u8XkdeO.js";import"./index-BGZm-V5p.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-3J3j4TTi.js";import"./throttle-DFLwZbH7.js";import"./axisSelectors-De-QIQw0.js";import"./d3-scale-66RSqjvR.js";import"./CartesianAxis-Ch4CXp2q.js";import"./Layer-DFK8Q48P.js";import"./types-8TEdLcfT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-1_lrB1iK.js";import"./index-B3BeYDVW.js";import"./index-BlCA3-m5.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CdEiQwLq.js";import"./index-CBz7nTI3.js";import"./fillDefinitions-miIei5Ak.js";import"./CartesianChart-DwN6Hmpg.js";import"./ZIndexPortal-DFoHfC3q.js";import"./CategoricalChart-DDmHhC4k.js";import"./LabelList-Cw7YYHKY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dph07-O4.js";import"./useAnimationId-Cw8-NrKa.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CmFmkU6o.js";import"./tooltipContext-qd_vPvGB.js";import"./dataEntryStyles-BYeCTEXf.js";import"./ErrorBarContext-DjFDtKDe.js";import"./activeStyles-B9WkYOlU.js";import"./SetGraphicalItem-DaR9Vkxk.js";import"./getZIndexFromUnknown-DrzkWzUs.js";import"./useEffectiveDataKey-etJHmmHX.js";import"./omit-OgdFWu6Y.js";import"./isArguments-yB-y1yaH.js";import"./Curve--g8UutGF.js";import"./step-DxyJMaY2.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CVBU67Gc.js";import"./Dot-BY7ekD9g.js";import"./Symbols-C1ZJFDve.js";import"./symbol-Cwivg1At.js";import"./getRadiusAndStrokeWidthFromDot-DwT_-E51.js";import"./useElementOffset-Dg2vO0r-.js";import"./uniqBy-DIJRTBn5.js";import"./iteratee-CzzbuyX8.js";import"./Cross-NXQm5MWe.js";import"./Sector-CXVHJrRe.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
