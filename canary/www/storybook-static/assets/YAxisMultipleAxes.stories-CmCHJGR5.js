import{R as t}from"./iframe-DX-hRh6v.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DIovWrSv.js";import{R as l}from"./zIndexSlice-CF9qsbsG.js";import{C as x}from"./ComposedChart-C2X6i1Aj.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Brwv4BFL.js";import{L as a}from"./Line-BH8HaOE7.js";import{X as c}from"./XAxis-CYn79B9K.js";import{T as g}from"./Tooltip-BJGeDUzS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-D-d2ZuWG.js";import"./Layer-CI3urb_2.js";import"./resolveDefaultProps-Dl_-nEqR.js";import"./Text-DrQewChW.js";import"./DOMUtils-DdDZ08pJ.js";import"./isWellBehavedNumber-B2WkM8vL.js";import"./Label-C_1G92on.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BUVc2LfK.js";import"./index-C_co4uh9.js";import"./index-qEhkJMvm.js";import"./types-B5ssIei3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cdw3MVyO.js";import"./throttle-C3bKSARL.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-Ccwce-LO.js";import"./index-BkRrDgeK.js";import"./index-BityOqCw.js";import"./axisSelectors-CnUP3J5o.js";import"./d3-scale-CyRwSV0J.js";import"./CartesianChart-nrO7ZyU0.js";import"./chartDataContext-BrdpOtNY.js";import"./CategoricalChart-wLfPHTeT.js";import"./tooltipContext-Cl60k9_a.js";import"./AnimatedItems-D1fsZDjw.js";import"./useAnimationId-oXOpEwNt.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C4fEhR5i.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CgP8l6zk.js";import"./RegisterGraphicalItemId-CpEpaHjk.js";import"./ErrorBarContext-DCgqaVYx.js";import"./GraphicalItemClipPath-DgEtuK8_.js";import"./SetGraphicalItem-BVTByb6H.js";import"./getZIndexFromUnknown-CyNubphd.js";import"./graphicalItemSelectors-ag16I1EJ.js";import"./Curve-DBTqjj17.js";import"./step-ghZz1pkQ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C0NUOkGZ.js";import"./Dot-Dn04Kjs0.js";import"./getRadiusAndStrokeWidthFromDot-k00jkWeK.js";import"./useElementOffset-Tj-Qp8PQ.js";import"./uniqBy-BOqCl2hX.js";import"./iteratee-QMX4YEQu.js";import"./Cross-ipAmTQrY.js";import"./Sector-she__mVB.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
