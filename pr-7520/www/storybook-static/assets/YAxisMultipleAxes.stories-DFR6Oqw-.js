import{R as t}from"./iframe-D-BXEDkQ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CY9nfIzq.js";import{R as l}from"./zIndexSlice-CNOaqOPA.js";import{C as x}from"./ComposedChart-DggYfUEi.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DrwSdmq0.js";import{L as a}from"./Line-BWnL5Flc.js";import{X as c}from"./XAxis-CsYsIQZ3.js";import{T as g}from"./Tooltip-DLESUsdO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BPou2DWk.js";import"./Layer-DZ4WZEl1.js";import"./resolveDefaultProps-BCmCl_HK.js";import"./Text-DKRb_pWs.js";import"./DOMUtils-BtYPMtse.js";import"./isWellBehavedNumber-DG1BXq00.js";import"./Label-BXssQtMI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BMtWXslr.js";import"./index-G9DZGzqS.js";import"./index-DyZMLGLF.js";import"./types-CKqvof5k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BW0B_yyu.js";import"./throttle-DcYZZCS9.js";import"./RechartsWrapper-DAPlnek-.js";import"./index-CSvF-BDD.js";import"./index-Dzr30MxI.js";import"./axisSelectors-DbolJrr5.js";import"./d3-scale-Cw0gW9iZ.js";import"./CartesianChart-B9gu2iu_.js";import"./chartDataContext-Drjp45TO.js";import"./CategoricalChart-Dffh87Ow.js";import"./tooltipContext-Da9Q34xm.js";import"./AnimatedItems-Bb-goO_2.js";import"./useAnimationId-BbJgISg4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DhH6fWaa.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D6NCpbS5.js";import"./RegisterGraphicalItemId-D4LQkijr.js";import"./ErrorBarContext-CYH48hpc.js";import"./GraphicalItemClipPath-CpDe9sQE.js";import"./SetGraphicalItem-DFCa6_Km.js";import"./getZIndexFromUnknown-YtoJxASB.js";import"./graphicalItemSelectors-DgXVbdYn.js";import"./Curve-BiodO3IJ.js";import"./step-O6juOnPn.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C16wOqeD.js";import"./Dot-JDsRBdmy.js";import"./getRadiusAndStrokeWidthFromDot-BimxZCtp.js";import"./useElementOffset-DxoNRjwJ.js";import"./uniqBy-Bq10x9oa.js";import"./iteratee-V8Uwp1qB.js";import"./Cross-Dx3XzPYb.js";import"./Sector-B5fL-Syb.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
