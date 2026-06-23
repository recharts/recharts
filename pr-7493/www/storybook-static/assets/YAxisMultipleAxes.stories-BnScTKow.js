import{R as t}from"./iframe-BWYv0W0I.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DIG6TcZO.js";import{R as l}from"./zIndexSlice-BZjtJtRO.js";import{C as x}from"./ComposedChart-3rsPeh8g.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Dm45xU6u.js";import{L as a}from"./Line-BatACtMg.js";import{X as c}from"./XAxis-DpTHfSKL.js";import{T as g}from"./Tooltip-BgsINPYu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-YpvzSERN.js";import"./CartesianAxis-DUktxQyy.js";import"./Layer-Bj1H698J.js";import"./resolveDefaultProps-_5I5KHm0.js";import"./Text-z-woKoAn.js";import"./DOMUtils-CcdNUrj8.js";import"./isWellBehavedNumber-BvLe-n8Z.js";import"./Label-Df5r-7el.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DFHa7v_x.js";import"./index-DTxMd3-u.js";import"./index-BcXaHiqG.js";import"./types-Dytxgf6V.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BylsjMl6.js";import"./immer-BPqm6WO1.js";import"./RechartsWrapper-A48iA3eZ.js";import"./index-C30dpYE2.js";import"./index-ByNF5ywv.js";import"./axisSelectors-BqS5J0kn.js";import"./d3-scale-CFHPl3Hx.js";import"./CartesianChart-CWrMrl0B.js";import"./chartDataContext-8Yx6Y713.js";import"./CategoricalChart-COWvBEEg.js";import"./tooltipContext-cYptnfj1.js";import"./AnimatedItems-DhxwbWlw.js";import"./useAnimationId-CZnp92c4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CT2eea31.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-iodju3ZT.js";import"./RegisterGraphicalItemId-CK6cp7E5.js";import"./ErrorBarContext-CwrVQcWY.js";import"./GraphicalItemClipPath-lDfebASI.js";import"./SetGraphicalItem-DQ0Lh0bj.js";import"./getZIndexFromUnknown-fNBXNElF.js";import"./graphicalItemSelectors-BD089yMu.js";import"./Curve-u414SiC4.js";import"./step-FVBZPP9Y.js";import"./path-DyVhHtw_.js";import"./ActivePoints-_ILc4AHk.js";import"./Dot-DQMh135C.js";import"./getRadiusAndStrokeWidthFromDot-DsWQpG0J.js";import"./useElementOffset-DLPfaP7i.js";import"./uniqBy-Bag5RbDs.js";import"./iteratee-ByXW7YOK.js";import"./Cross-nCh6kSUZ.js";import"./Sector-zHxlDDaP.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
