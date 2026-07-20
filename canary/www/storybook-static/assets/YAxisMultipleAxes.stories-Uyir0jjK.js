import{R as t}from"./iframe-vOLnYXOZ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-jgbh3-iB.js";import{R as l}from"./zIndexSlice-Mv0cm5Fz.js";import{C as x}from"./ComposedChart-CHIk5yi2.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D4kSVu5Z.js";import{L as a}from"./Line-Ii7UCjUa.js";import{X as c}from"./XAxis-DZdEV9rv.js";import{T as g}from"./Tooltip-Bb3rvUwP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-B04tnKne.js";import"./Layer-BzdlA6Ig.js";import"./resolveDefaultProps-DMvU9hKF.js";import"./Text-FiyA8tGX.js";import"./DOMUtils-Di4Ni1ZE.js";import"./isWellBehavedNumber-TyK-Q9bs.js";import"./Label-D2t7QHPj.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DaGlu0J6.js";import"./index-Ccx6Fn8x.js";import"./index-Bno8px0F.js";import"./types-DL_lANQl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-zOvani6W.js";import"./throttle-H6UrPiO3.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-cdIriNtS.js";import"./index-C_GLmlAa.js";import"./index-loUlOQAQ.js";import"./axisSelectors-9pB8uUjg.js";import"./d3-scale-CXVWvw2_.js";import"./CartesianChart-6FCR2qTV.js";import"./chartDataContext-CdBeAXiw.js";import"./CategoricalChart-BHtJtaWL.js";import"./tooltipContext-BleuH9kJ.js";import"./AnimatedItems-M5yh8SZt.js";import"./useAnimationId-J9bbR3c6.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DGmUUWeF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CX_xtPwj.js";import"./RegisterGraphicalItemId-YQ-tZiZG.js";import"./ErrorBarContext-CYCJv9Vs.js";import"./GraphicalItemClipPath-CSPsls6A.js";import"./SetGraphicalItem-Dz9FndIn.js";import"./getZIndexFromUnknown-Cyf1t_kt.js";import"./graphicalItemSelectors-Das7x7Jz.js";import"./Curve-DpB1TURa.js";import"./step-DBkijEka.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DMSGIjaa.js";import"./Dot-BOZyGCoc.js";import"./getRadiusAndStrokeWidthFromDot-DaL3Xp1Q.js";import"./useElementOffset-BxXr0q4n.js";import"./uniqBy-B-zSRekl.js";import"./iteratee-BhNLOt-G.js";import"./Cross-_eiJhukN.js";import"./Sector-aoDqeOQX.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
