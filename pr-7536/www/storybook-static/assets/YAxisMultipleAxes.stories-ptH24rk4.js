import{R as t}from"./iframe-DnX8r39b.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CSFozfSt.js";import{R as l}from"./zIndexSlice-CdRT6CH7.js";import{C as x}from"./ComposedChart-B98bfh0U.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BA46o5sv.js";import{L as a}from"./Line-DgV7sV5s.js";import{X as c}from"./XAxis-BTaYdNe8.js";import{T as g}from"./Tooltip-Bacn6d6g.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Cy9WREkT.js";import"./Layer-CauFkfpG.js";import"./resolveDefaultProps-yb31Cz6R.js";import"./Text-BO1t-pUg.js";import"./DOMUtils-jh1pVKRO.js";import"./isWellBehavedNumber-ChlqVGNf.js";import"./Label-D3KHAYnK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C1d715l9.js";import"./index-B59DWSJw.js";import"./index-8CcjFvVe.js";import"./types-CgrT81ZV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DDGhfVYq.js";import"./throttle-JCKZhQLq.js";import"./RechartsWrapper-Sbu3sQZd.js";import"./index-CARiuz8r.js";import"./index-lg-7YqR9.js";import"./axisSelectors-D4OQvXCv.js";import"./d3-scale-B45mdNw5.js";import"./CartesianChart-8TrBr0AL.js";import"./chartDataContext-B2KFL-Nz.js";import"./CategoricalChart-DVOQ2_gX.js";import"./tooltipContext-Cuox8ssJ.js";import"./AnimatedItems--Dg0X7dt.js";import"./useAnimationId-zs5IE8iA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cv-9SrzG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C4xeJz4x.js";import"./RegisterGraphicalItemId-qEo7oahD.js";import"./ErrorBarContext-C_qu3TpT.js";import"./GraphicalItemClipPath-BiCBWmQX.js";import"./SetGraphicalItem-BXuH3_k3.js";import"./getZIndexFromUnknown-CnaJJwMJ.js";import"./graphicalItemSelectors-CBSU1VvW.js";import"./Curve-Zsfr7xXj.js";import"./step-TiPrAqPO.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CuEYXnF_.js";import"./Dot-DD3VaHTo.js";import"./getRadiusAndStrokeWidthFromDot-BTTETrvJ.js";import"./useElementOffset-BTPLFIFL.js";import"./uniqBy-Cjb0gCKQ.js";import"./iteratee-D8Xc7oTH.js";import"./Cross-DJ_p583i.js";import"./Sector-BXJPUv-D.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
