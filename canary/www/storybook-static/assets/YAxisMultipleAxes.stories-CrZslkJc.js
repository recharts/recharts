import{R as t}from"./iframe-B89lyy_-.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CnBxKCbE.js";import{R as l}from"./zIndexSlice-BefUx2Nd.js";import{C as x}from"./ComposedChart-BsssixLG.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DaOrSdsz.js";import{L as a}from"./Line-_gevD_1B.js";import{X as c}from"./XAxis-CSc3N7hL.js";import{T as g}from"./Tooltip-DeSzgcGm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-C15axuMc.js";import"./Text-Dp5nXiQm.js";import"./resolveDefaultProps-CABzBelW.js";import"./DOMUtils-QfcpEM-9.js";import"./ZIndexLayer-6gVYvq6w.js";import"./index-KRoZzcbe.js";import"./index-BB4NcWJN.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CVXgDqrg.js";import"./throttle-BZuMAyb2.js";import"./axisSelectors-DR4qXUjK.js";import"./d3-scale-BgC9WZfP.js";import"./CartesianAxis-DOEm-eMS.js";import"./Layer-CVGlZAI2.js";import"./types-DRZvsZyz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B3wgyDqC.js";import"./index-DE_m11QS.js";import"./index-B0mW9FVH.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-VgXxR9hf.js";import"./index-jctBjl-B.js";import"./CartesianChart-CsOis6XS.js";import"./ZIndexPortal-BM6dYFis.js";import"./CategoricalChart-C1dGPY9G.js";import"./LabelList-6ZaFDz_R.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CXq2cdeR.js";import"./useAnimationId-CrfHw1CS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CFUdvdUp.js";import"./tooltipContext-Dxp7rSLd.js";import"./dataEntryStyles-C4pyloN-.js";import"./ErrorBarContext-CHzFixYj.js";import"./activeStyles-CQvoijJ0.js";import"./SetGraphicalItem-m8DhvWZo.js";import"./getZIndexFromUnknown-BsKTAFT9.js";import"./themeFill-BkM1x4hA.js";import"./useEffectiveDataKey-oyhM30Oz.js";import"./fillDefinitions-B-2MwM8M.js";import"./omit-BrVOqOU-.js";import"./isArguments-yB-y1yaH.js";import"./Curve-3TxFGWdO.js";import"./step-BRjfFT26.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BKrA626A.js";import"./Dot-97i04StL.js";import"./Symbols-DfxY9dbn.js";import"./symbol-DvLsC2AF.js";import"./getRadiusAndStrokeWidthFromDot-Ddm3Cqxr.js";import"./useElementOffset-DD1T0fU1.js";import"./uniqBy-QREi1o1G.js";import"./iteratee-Dd6IP1KA.js";import"./Cross-Bx7xKlIX.js";import"./Sector-DS2QQ-iw.js";const Wt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
