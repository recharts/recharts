import{R as t}from"./iframe-_oCKXQQT.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-pBFniQdP.js";import{R as l}from"./zIndexSlice-Dq64QlX1.js";import{C as x}from"./ComposedChart-Doh5buxK.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-iq9J0QlP.js";import{L as a}from"./Line-CpOlBkzb.js";import{X as c}from"./XAxis-D3L4SFSq.js";import{T as g}from"./Tooltip-BBk2mMd_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Dgc8xSDl.js";import"./CartesianAxis--Lh3QzvY.js";import"./Layer-BtAMG36m.js";import"./resolveDefaultProps-D-cNYr8U.js";import"./Text-CaXzzKZw.js";import"./DOMUtils-BvVxKZ4D.js";import"./isWellBehavedNumber-B9wxNRPu.js";import"./Label-DrF3NWpt.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DUuDPJyN.js";import"./index-eQFvDN2n.js";import"./index-BhdyHQ9q.js";import"./types-C2uV_Cvt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BRr9Mzxw.js";import"./throttle-BQ_gnI8m.js";import"./RechartsWrapper-BkeUzj5p.js";import"./index-6i1k6cIu.js";import"./index-DYTqQgsI.js";import"./axisSelectors-DIl8ejt1.js";import"./d3-scale-DRcGFkfh.js";import"./CartesianChart-Br7CcIjd.js";import"./chartDataContext-DAy8Squq.js";import"./CategoricalChart-CepUJJer.js";import"./tooltipContext-D56Y1KI-.js";import"./AnimatedItems-CmMbILYr.js";import"./useAnimationId-CObBJ0f9.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BxnTCKGy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CrKU6_AB.js";import"./RegisterGraphicalItemId-43VeAxEX.js";import"./ErrorBarContext-C6Mh3zEx.js";import"./GraphicalItemClipPath-BiS7z6q5.js";import"./SetGraphicalItem-jz90sZeJ.js";import"./getZIndexFromUnknown-DQk5nsuk.js";import"./graphicalItemSelectors-CH5-FBeI.js";import"./Curve-OFG9MmZD.js";import"./step-BG6ETINo.js";import"./path-DyVhHtw_.js";import"./ActivePoints-vZyVJ-4h.js";import"./Dot-B8ZmznHu.js";import"./getRadiusAndStrokeWidthFromDot-AsQYUmCL.js";import"./useElementOffset-CeTWjI2A.js";import"./uniqBy-CTI2mupa.js";import"./iteratee-2tW9rS6f.js";import"./Cross-jkS6bSBc.js";import"./Sector-BuT59_MP.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
