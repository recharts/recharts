import{R as t}from"./iframe-E9cTKeRE.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-F7YCqO7L.js";import{R as l}from"./zIndexSlice-DgjoBcM4.js";import{C as x}from"./ComposedChart-Blhk5iCf.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D5mdgqCB.js";import{L as a}from"./Line-oPEUnh-k.js";import{X as c}from"./XAxis-rRrOlgKo.js";import{T as g}from"./Tooltip-DkJ_BFd4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-X6rLp4nN.js";import"./Layer-gCSDlxX6.js";import"./resolveDefaultProps-VcEXnedp.js";import"./Text-Z5PFJcO5.js";import"./DOMUtils-7h76k5q7.js";import"./isWellBehavedNumber-CNJuLpb3.js";import"./Label-BpZfxLrK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-T104iiSj.js";import"./index-CXgkWbkn.js";import"./index-dTe_TrB1.js";import"./types-BiCnzAm7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-8_6vlRT3.js";import"./throttle-CGWlJj3Y.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-B1G603CI.js";import"./index-BKdHAXhr.js";import"./index-CCDqlq1e.js";import"./axisSelectors-Cz4e0hh2.js";import"./d3-scale-BKY6FaDv.js";import"./CartesianChart-h93kYpLN.js";import"./chartDataContext-BLSdU0GF.js";import"./CategoricalChart-Dgnr1Z5s.js";import"./tooltipContext-Dip-pauz.js";import"./AnimatedItems-B1DMV_LJ.js";import"./useAnimationId-DdQ6zElL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CPcTji69.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D82Ok3yU.js";import"./RegisterGraphicalItemId-y5W6RdIF.js";import"./ErrorBarContext-CrHnHUPz.js";import"./GraphicalItemClipPath-BanWagPz.js";import"./SetGraphicalItem-i24-OBmJ.js";import"./getZIndexFromUnknown-CdNXl1gM.js";import"./graphicalItemSelectors-D0cXoEU9.js";import"./Curve-CKjkPgN2.js";import"./step-xjRdG8EV.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Co1l_Ha9.js";import"./Dot-DCqiO5Z7.js";import"./getRadiusAndStrokeWidthFromDot-CZrTH9En.js";import"./useElementOffset-D-VfA5vV.js";import"./uniqBy-BABLZnAx.js";import"./iteratee-CoZ1T3nQ.js";import"./Cross-B3_mywlq.js";import"./Sector-BitZCkPD.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const vt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,vt as __namedExportsOrder,Yt as default};
