import{R as t}from"./iframe-dVDPDAoI.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BD3X1oHR.js";import{R as l}from"./zIndexSlice-Bsc_tgY7.js";import{C as x}from"./ComposedChart-BPNopFli.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-P6ce0Ml4.js";import{L as a}from"./Line-B5W3Glun.js";import{X as c}from"./XAxis-Ra2gX97C.js";import{T as g}from"./Tooltip-CVwsfvTx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-VpXFggwN.js";import"./CartesianAxis-BOKYqx2U.js";import"./Layer-M7jAw79j.js";import"./resolveDefaultProps-B9xmOxzf.js";import"./Text-Bi26GJyN.js";import"./DOMUtils-lc6v0qq-.js";import"./isWellBehavedNumber-CPNu7XeA.js";import"./Label-BEOAhV_I.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D86eoQTZ.js";import"./index-DKbSAh9L.js";import"./index-Dx5dPQRG.js";import"./types-jcNKZDcp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DnkJLQvR.js";import"./immer-BdmkJOJr.js";import"./RechartsWrapper-BD3vbn3c.js";import"./index-C_VdjUmv.js";import"./index-CnhhL7Zb.js";import"./axisSelectors-BILy-Fum.js";import"./d3-scale-Dow8MXGl.js";import"./string-B6fdYHAA.js";import"./CartesianChart-rEvqbiLD.js";import"./chartDataContext-CZJe0GvZ.js";import"./CategoricalChart-CZjUsR6e.js";import"./tooltipContext-CiAj9sGp.js";import"./AnimatedItems-BynH3EWp.js";import"./useAnimationId-DHcuBUhz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cm-MJcqD.js";import"./ActiveShapeUtils-G5tYFgXR.js";import"./RegisterGraphicalItemId-BTF8QJ8M.js";import"./ErrorBarContext-DM0DtMrb.js";import"./GraphicalItemClipPath-DL50SU1R.js";import"./SetGraphicalItem-BvRajfM7.js";import"./getZIndexFromUnknown-CrBxs90n.js";import"./graphicalItemSelectors-cLW-ET4H.js";import"./Curve-Bib8lOHe.js";import"./step-BD-4s5qs.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Dsf5E73K.js";import"./Dot-BoVNLJ4n.js";import"./getRadiusAndStrokeWidthFromDot-Buc-JRMN.js";import"./useElementOffset-TBdqj4Y3.js";import"./uniqBy-Bo_ObW1a.js";import"./iteratee-DdGg6bBx.js";import"./Cross-DzdClftC.js";import"./Sector-C5lQsPUE.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
