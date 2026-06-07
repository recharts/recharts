import{R as t}from"./iframe-B27eVaFF.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CC995jnJ.js";import{R as l}from"./zIndexSlice-DLq0QSm6.js";import{C as x}from"./ComposedChart-CYtA9C9q.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BEB0sS8R.js";import{L as a}from"./Line-Bk9BDUUg.js";import{X as c}from"./XAxis-C-VjsgkB.js";import{T as g}from"./Tooltip-D3ki7Oi-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BRxKQDDf.js";import"./CartesianAxis-1UkcRdSJ.js";import"./Layer-CvC1SkE0.js";import"./resolveDefaultProps-BE08UwbV.js";import"./Text-dTW2gHUK.js";import"./DOMUtils-DxsvOJTL.js";import"./isWellBehavedNumber-CotgHNs1.js";import"./Label-k_ca_Zdh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DlBEWXQx.js";import"./index-DoegUUyt.js";import"./index-DDpWztz3.js";import"./types-CkVecV7M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DHlObRt7.js";import"./immer-YcLAmGMI.js";import"./RechartsWrapper-DlESZ7tm.js";import"./index-Cw-Wuc3D.js";import"./index-DI6zkpD0.js";import"./axisSelectors-DxuiIF3z.js";import"./d3-scale-BTGRH2n_.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Bm35oZlB.js";import"./chartDataContext-Cx0GXsRx.js";import"./CategoricalChart-DFkUIq_Y.js";import"./tooltipContext-C98TgMUl.js";import"./AnimatedItems-6YxWbeO7.js";import"./useAnimationId-BitHcKd_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BCqcMhZI.js";import"./ActiveShapeUtils-Bzy2q7aU.js";import"./RegisterGraphicalItemId-oZqB1u6h.js";import"./ErrorBarContext-tb2PhcR_.js";import"./GraphicalItemClipPath-BA_nO_Lx.js";import"./SetGraphicalItem-DWdSfkk6.js";import"./getZIndexFromUnknown-Bbjiz8cI.js";import"./graphicalItemSelectors-BJuoZRjX.js";import"./Curve-C9ctIi4z.js";import"./step-C1n6zis1.js";import"./path-DyVhHtw_.js";import"./ActivePoints-59Xfju6r.js";import"./Dot-CXeM3dGw.js";import"./getRadiusAndStrokeWidthFromDot-Dvm3ARSn.js";import"./useElementOffset-IkfKbF5l.js";import"./uniqBy-BtjkBcJS.js";import"./iteratee-B8u85uZV.js";import"./Cross-h2tex2-h.js";import"./Sector-CvLA_0W-.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
