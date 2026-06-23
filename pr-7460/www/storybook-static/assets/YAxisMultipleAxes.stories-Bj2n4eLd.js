import{R as t}from"./iframe-DQmeeGiA.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BSQK2YTa.js";import{R as l}from"./zIndexSlice-vj7A5RkB.js";import{C as x}from"./ComposedChart-CaXqoiyd.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BZHeWxOi.js";import{L as a}from"./Line-BWR_fQDK.js";import{X as c}from"./XAxis-CPOb-1qE.js";import{T as g}from"./Tooltip-C6MCJIIJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-D0YgmYSp.js";import"./CartesianAxis-CsI9VW1t.js";import"./Layer-C92GpBxv.js";import"./resolveDefaultProps-CQRwsHO0.js";import"./Text-CaOtzMPo.js";import"./DOMUtils-D4CFUHQm.js";import"./isWellBehavedNumber-CJ4H_fXR.js";import"./Label-DLumr0gz.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-LS7m1tXW.js";import"./index-DCJPjZ_f.js";import"./index-D_KMR0re.js";import"./types-BWqAEvBR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CpMyOcpp.js";import"./immer-CuM-_qKB.js";import"./RechartsWrapper-D3uqokgy.js";import"./index-D1lTGX2z.js";import"./index-ZLNt73_J.js";import"./axisSelectors-Cn3uvYUg.js";import"./d3-scale-B-26TW07.js";import"./CartesianChart-CE19F1By.js";import"./chartDataContext-GPNpGYxg.js";import"./CategoricalChart-D7Ayh5uN.js";import"./tooltipContext-YOw13Mgv.js";import"./AnimatedItems-DSodAZpf.js";import"./useAnimationId-VbcZ3sEu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bsb4rUs5.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHmC6EYX.js";import"./RegisterGraphicalItemId-Bgc1uwdC.js";import"./ErrorBarContext-aN2SYuw4.js";import"./GraphicalItemClipPath-BWRZakeV.js";import"./SetGraphicalItem-CiXKqcwE.js";import"./getZIndexFromUnknown-BhGLCuZg.js";import"./graphicalItemSelectors-QlKLCOv9.js";import"./Curve-BSCksJ2p.js";import"./step-B5y8ObV2.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CeLiAPaS.js";import"./Dot-DKRonFKw.js";import"./getRadiusAndStrokeWidthFromDot-AjrfEp5x.js";import"./useElementOffset-Duwsc3QZ.js";import"./uniqBy-KqLhsUPy.js";import"./iteratee-B34lqcgr.js";import"./Cross-RQft4sJ7.js";import"./Sector-CjffYPJE.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
