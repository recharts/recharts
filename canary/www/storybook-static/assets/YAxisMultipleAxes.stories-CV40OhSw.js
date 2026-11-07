import{R as t}from"./iframe-DWt4J3JN.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CsFlwLse.js";import{R as l}from"./zIndexSlice-NSNONz_v.js";import{C as x}from"./ComposedChart-Dnd49qHa.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DuIaNWpW.js";import{L as a}from"./Line-0mvPQ6iO.js";import{X as c}from"./XAxis-Ct82dr0g.js";import{T as g}from"./Tooltip-BZHJZUNK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Bkb0GMep.js";import"./Text-BH_q_eI2.js";import"./resolveDefaultProps-D4EpIsqz.js";import"./DOMUtils-gLxo7mD7.js";import"./ZIndexLayer-gpvd6E93.js";import"./index-BdNcxnLc.js";import"./index-C3nO4u5d.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BNqZLY2c.js";import"./throttle-Dk5xsQjg.js";import"./axisSelectors-BS7avNJg.js";import"./d3-scale-BC5jrybd.js";import"./CartesianAxis-Ch6tESXa.js";import"./Layer-D1fzjsCN.js";import"./types-BbXG2_az.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C-fcLX-F.js";import"./index-FrWa7Exr.js";import"./index-vXblBJSu.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-COqAJslP.js";import"./index-Dvam2yfO.js";import"./fillDefinitions-CXWevUoQ.js";import"./CartesianChart-cgT47Vj6.js";import"./chartDataContext-CFu7cHCJ.js";import"./CategoricalChart-CSFFRE3G.js";import"./ZIndexPortal-CNwyGADw.js";import"./LabelList-DCtJIAIf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cd9oJYQg.js";import"./useAnimationId-DaySoH3H.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BICHaO6W.js";import"./tooltipContext-CvdBWgjK.js";import"./dataEntryStyles-CMWxjrvv.js";import"./ErrorBarContext-D_UxjrQr.js";import"./activeStyles-DEL6Q9xK.js";import"./SetGraphicalItem-cSBJzNh5.js";import"./getZIndexFromUnknown-D9w36Eih.js";import"./useEffectiveDataKey---V5hCOC.js";import"./omit-D9RVYgBg.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DrWralR8.js";import"./step-Bit_NyY0.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BL9AGUXf.js";import"./Dot-BgFpa2WJ.js";import"./Symbols-DwZTYmJ_.js";import"./symbol-DVO5NwTU.js";import"./getRadiusAndStrokeWidthFromDot-KA7euB10.js";import"./useElementOffset-BsiXtm6U.js";import"./uniqBy-DSjR0NWH.js";import"./iteratee-BZC7KUwZ.js";import"./Cross-CP_9_DpQ.js";import"./Sector-ei3xmHoK.js";const Wt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Xt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Xt as __namedExportsOrder,Wt as default};
