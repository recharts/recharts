import{R as t}from"./iframe-CoZYBKIX.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CF_GQk3H.js";import{R as l}from"./zIndexSlice-2wRK4kMu.js";import{C as x}from"./ComposedChart-BD8sJbPA.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DjvynevS.js";import{L as a}from"./Line-D10QsT7G.js";import{X as c}from"./XAxis-BYrKdn3j.js";import{T as g}from"./Tooltip-D3QVER9o.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CSNiqDgA.js";import"./Layer-Do7uuXp2.js";import"./resolveDefaultProps-CXWmRWxD.js";import"./Text-Br2KMW9j.js";import"./DOMUtils-B_OLo7Kh.js";import"./isWellBehavedNumber-DPie-IPs.js";import"./Label-B5Sw4cWo.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cub30BGV.js";import"./index-CxqEAs70.js";import"./index-DbtoquVJ.js";import"./types-DlqgPqNT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BJztigH5.js";import"./throttle-DTjNB_wn.js";import"./RechartsWrapper-Chafq55k.js";import"./index-8vVHWDox.js";import"./index-CB7yOKq2.js";import"./axisSelectors-Bk60vGia.js";import"./d3-scale-Bs_mySfl.js";import"./CartesianChart-DoniaHV0.js";import"./chartDataContext-Cx3CX6pd.js";import"./CategoricalChart-DEIC5a6b.js";import"./tooltipContext-BZuhr6e1.js";import"./AnimatedItems-OdNYlxxq.js";import"./useAnimationId-C7atvuRl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B4AWbI_f.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Is-vymDi.js";import"./RegisterGraphicalItemId-BhxVKnq7.js";import"./ErrorBarContext-D9rx9CvF.js";import"./GraphicalItemClipPath-BqDFfLzv.js";import"./SetGraphicalItem-Cm5RMzg0.js";import"./getZIndexFromUnknown-aMuYew3c.js";import"./graphicalItemSelectors-B5MdhFFy.js";import"./Curve-Cg7tsFL-.js";import"./step-C4ZbFa_I.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DpHWAW0C.js";import"./Dot-C3ifhvT9.js";import"./getRadiusAndStrokeWidthFromDot-J7tXgy4t.js";import"./useElementOffset-6wbHTWe8.js";import"./uniqBy-CLYAyW1w.js";import"./iteratee-DfrVONCs.js";import"./Cross-BKoJ5Aes.js";import"./Sector-Bhwh7YeU.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
