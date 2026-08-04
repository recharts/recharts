import{R as t}from"./iframe-DwLZZwhK.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BRmSg-U1.js";import{R as l}from"./zIndexSlice-lVUWNgM0.js";import{C as x}from"./ComposedChart-p1KVu18j.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DBq_vWy7.js";import{L as a}from"./Line-Cvv4G15o.js";import{X as c}from"./XAxis-DBBjIwDo.js";import{T as g}from"./Tooltip-bD6JfZFE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-tECJL-37.js";import"./Text-Bh0YxhQF.js";import"./resolveDefaultProps-D_yJAfqa.js";import"./DOMUtils-BGpns11t.js";import"./isWellBehavedNumber-DdXnDQ5z.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BAEsl3nH.js";import"./index-CyNYrL4w.js";import"./index-D2i4UmdT.js";import"./RechartsWrapper-B6xOBDhR.js";import"./index-BRPN53-o.js";import"./index-VnXRJ0a1.js";import"./throttle-m49sR4Np.js";import"./renderedTicksSlice-BnOQ8D5D.js";import"./axisSelectors-Deou-VxK.js";import"./d3-scale-CjSqz0E9.js";import"./CartesianAxis-ByQIstMG.js";import"./Layer-BVmot7FB.js";import"./types-B7g8Th-s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-pLBMwypQ.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart--QBa1qTn.js";import"./chartDataContext-BGrP4bw5.js";import"./CategoricalChart-Bx727tBC.js";import"./tooltipContext-C3AtKIbJ.js";import"./AnimatedItems-DKnm6tp0.js";import"./useAnimationId-C3Y_zOxU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DhnvvCg-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BFi0EA_4.js";import"./RegisterGraphicalItemId-CzEEk6Dd.js";import"./ErrorBarContext-wXozNj3Y.js";import"./GraphicalItemClipPath-C29F_2hP.js";import"./SetGraphicalItem-DX7YElzO.js";import"./getZIndexFromUnknown-BRCSk4uY.js";import"./graphicalItemSelectors-CsGPPAWZ.js";import"./Curve-Cv92tytC.js";import"./step-DqN0Bx6a.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CdWhr2jU.js";import"./Dot-CGLhLTV3.js";import"./graphicalItemIdentity-CtF6lVXQ.js";import"./useElementOffset-Df4AHCQV.js";import"./uniqBy-BbT4zose.js";import"./iteratee-DaU-OdzY.js";import"./Cross-CLLkCYoT.js";import"./Sector-DHs-qAjC.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Kt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Kt as __namedExportsOrder,vt as default};
