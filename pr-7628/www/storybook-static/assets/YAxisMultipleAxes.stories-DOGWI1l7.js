import{R as t}from"./iframe-CXzAxIFn.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-wlQFPYGV.js";import{R as l}from"./zIndexSlice-DKHp-gjy.js";import{C as x}from"./ComposedChart-Dp1v7Rwh.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-7Nw1RUS0.js";import{L as a}from"./Line-8hDx2QW5.js";import{X as c}from"./XAxis-CskEzE-5.js";import{T as g}from"./Tooltip-qGf575g5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BVxyVS7u.js";import"./Text-CpguaXBO.js";import"./resolveDefaultProps-JH3hFqB6.js";import"./DOMUtils-tMvYpyJu.js";import"./isWellBehavedNumber-De_HX__8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-1UiKp4gF.js";import"./index-D8seYp4q.js";import"./index-CTRG8-wP.js";import"./RechartsWrapper-CktPaUvK.js";import"./index-ZTBFmJUb.js";import"./index-Bt5TuINX.js";import"./throttle-BEsGyRMh.js";import"./axisSelectors-BUJigeZt.js";import"./d3-scale-BDPPBhC0.js";import"./renderedTicksSlice-CEhRwZ6b.js";import"./CartesianAxis-DNVNHP1o.js";import"./Layer-ypGDY04h.js";import"./types-BCNeIHLh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CpUwpPC6.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-8S5--7wV.js";import"./chartDataContext-DY-mZyCM.js";import"./CategoricalChart-CEtFLcT-.js";import"./tooltipContext-3cpvxxGl.js";import"./AnimatedItems-DRjz3iml.js";import"./useAnimationId-BbyN3hun.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CIymDIR1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CfdhJDcC.js";import"./RegisterGraphicalItemId-CeJgXyMl.js";import"./ErrorBarContext-xfWRS9uR.js";import"./graphicalItemIdentity-D7fkuVDS.js";import"./SetGraphicalItem-CTeY4uJY.js";import"./getZIndexFromUnknown-Bos0m94y.js";import"./graphicalItemSelectors-CZZ-sSd8.js";import"./Curve-sYpKNcK8.js";import"./step-DNi3GMvN.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BYqyQqlG.js";import"./Dot-B4u9F4mm.js";import"./getRadiusAndStrokeWidthFromDot-w3Si_Ccg.js";import"./useElementOffset-Cj8IkOFp.js";import"./uniqBy-Bi1ukr1C.js";import"./iteratee-zjhPqw6K.js";import"./Cross-DBG8i-4N.js";import"./Sector-vqU42HK2.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
