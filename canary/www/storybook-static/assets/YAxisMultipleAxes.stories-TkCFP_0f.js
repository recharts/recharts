import{R as t}from"./iframe-BC6iQeUr.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B2Rm1v3y.js";import{R as l}from"./zIndexSlice-DwuZ2Ow7.js";import{C as x}from"./ComposedChart-Bivk-oUr.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CFnvchXr.js";import{L as a}from"./Line-yiqo5pDE.js";import{X as c}from"./XAxis-8wiG-IT7.js";import{T as g}from"./Tooltip-B6SSATs-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BCMvROnb.js";import"./Text-fEDBC_0o.js";import"./resolveDefaultProps-DIZ3ps7e.js";import"./DOMUtils-B8TR7nYh.js";import"./ZIndexLayer-DCc79hxk.js";import"./index-D3yqD8af.js";import"./index-CYTdWqrV.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-mzCge1J3.js";import"./throttle-MiaNLFmz.js";import"./axisSelectors-Bd1LmNHc.js";import"./d3-scale-Daj11TvY.js";import"./CartesianAxis-eBXlpwXS.js";import"./Layer-Cuu8DjLO.js";import"./types-Dwpv4Yth.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BGFaFbR8.js";import"./index-D34_hmzU.js";import"./index-DraKlH0s.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DHIomU5i.js";import"./index-B7dOZ4Mr.js";import"./fillDefinitions-B6DkeJW_.js";import"./CartesianChart-BLRdoMZg.js";import"./ZIndexPortal-jmLjufPW.js";import"./CategoricalChart-9j6tsrvq.js";import"./LabelList-BFjn3eEm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CNYq4UQO.js";import"./useAnimationId-Cw69Pi1k.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DxbJ9fQI.js";import"./tooltipContext-DYplll-B.js";import"./dataEntryStyles-BFig0g5r.js";import"./ErrorBarContext-uhSKqamS.js";import"./activeStyles-DfgAGK4N.js";import"./SetGraphicalItem-CqMMnBeb.js";import"./getZIndexFromUnknown-BOxsRG-K.js";import"./useEffectiveDataKey-Bk74mtUJ.js";import"./omit-Ch3LLyxF.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BvPWva0Q.js";import"./step-DPNt-X3R.js";import"./path-DyVhHtw_.js";import"./ActivePoints-JuUDd9nh.js";import"./Dot-DyLV3zJ_.js";import"./Symbols-DBa5o5yK.js";import"./symbol-BvmQmKKh.js";import"./getRadiusAndStrokeWidthFromDot-DQip5ZIl.js";import"./useElementOffset-k-LXptTs.js";import"./uniqBy-CV8NSfie.js";import"./iteratee-Q-eBNyZk.js";import"./Cross-DSJzht9z.js";import"./Sector-B7q2mBx3.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
