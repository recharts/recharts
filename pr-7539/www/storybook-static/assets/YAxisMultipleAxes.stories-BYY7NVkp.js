import{R as t}from"./iframe-BhYIBUmE.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BDjlgMSD.js";import{R as l}from"./zIndexSlice-iZ75WhkA.js";import{C as x}from"./ComposedChart-CSJIRxEz.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BihGmuDI.js";import{L as a}from"./Line-CKX7TNtb.js";import{X as c}from"./XAxis-B9ZJYuv4.js";import{T as g}from"./Tooltip-DGjcwj5R.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-D47H33vb.js";import"./Layer-Di4CjYT0.js";import"./resolveDefaultProps-BDtRZXkF.js";import"./Text-DvhjqfeR.js";import"./DOMUtils-0OARPr3L.js";import"./isWellBehavedNumber-XdoKmyaC.js";import"./Label-D4aavVkg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DzEhLRNI.js";import"./index-DEEvK7wS.js";import"./index-D-p5hhZ6.js";import"./types-98-DlTag.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BvbBXc0R.js";import"./throttle-Y6Q35rOn.js";import"./RechartsWrapper-DQUmtvyG.js";import"./index-BoNxyHn5.js";import"./index-B02QR74t.js";import"./axisSelectors-XMI2B6JU.js";import"./d3-scale-Ca87_qMg.js";import"./CartesianChart-CnNFNMoi.js";import"./chartDataContext-DqiOTlWU.js";import"./CategoricalChart-DhAV5rxK.js";import"./tooltipContext-IsDItl8-.js";import"./AnimatedItems-BLN0wGQm.js";import"./useAnimationId-BPiSh6IJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BZ1mXMev.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Di4Bw8dO.js";import"./RegisterGraphicalItemId-BXUxqLaU.js";import"./ErrorBarContext-CcwUloBe.js";import"./GraphicalItemClipPath-gTOFxICa.js";import"./SetGraphicalItem-ZzJW--aO.js";import"./getZIndexFromUnknown-6pIDRAPI.js";import"./graphicalItemSelectors-CadEeGVz.js";import"./Curve-BFWIv3Fl.js";import"./step-Dbe6DqiS.js";import"./path-DyVhHtw_.js";import"./ActivePoints-GDUXfCj4.js";import"./Dot-DorxToFy.js";import"./getRadiusAndStrokeWidthFromDot-Bno7EZgK.js";import"./useElementOffset-CSXMIDAf.js";import"./uniqBy-Br7Gv2yg.js";import"./iteratee-B989Z8v9.js";import"./Cross-Bh5VpJP9.js";import"./Sector-B7axzzn3.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
