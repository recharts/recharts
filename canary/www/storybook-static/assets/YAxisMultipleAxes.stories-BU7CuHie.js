import{R as t}from"./iframe-qeJRbQC_.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BZzCIX-v.js";import{R as l}from"./zIndexSlice-7202Aouk.js";import{C as x}from"./ComposedChart-CxuV2NoV.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D06e7dPh.js";import{L as a}from"./Line-gjOGxWIr.js";import{X as c}from"./XAxis-u_1Q5fGR.js";import{T as g}from"./Tooltip-CuTJR1uK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-IJrwe4z6.js";import"./Text-CGxsVVX7.js";import"./resolveDefaultProps-DeRAgm8x.js";import"./DOMUtils-DzJTCa9O.js";import"./isWellBehavedNumber-CEbP45d6.js";import"./useId-BP7tb9fo.js";import"./useBackwardsCompatibleTheme-DmTHavmp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D8LlaNHN.js";import"./index-BD72gC8i.js";import"./index-DyUeFg7T.js";import"./RechartsWrapper-CI86w_cv.js";import"./axisSelectors-D3Tk6yw2.js";import"./throttle-Bm7TlndJ.js";import"./d3-scale-DPqZAioL.js";import"./index-DfrLYgMZ.js";import"./index-COOVNst_.js";import"./renderedTicksSlice-BMyK9gC5.js";import"./index-BOsshKUN.js";import"./CartesianAxis-BByvFPIV.js";import"./Layer-DnfYbRaC.js";import"./types-CQ8TW7B4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D9mK1Hr2.js";import"./chartDataContext-BPJsRsvJ.js";import"./CategoricalChart-DXUZLIpB.js";import"./AnimatedItems-Ba5qFTnf.js";import"./useAnimationId-Dc0yoLfA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CVQykKnP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DKEMCySD.js";import"./tooltipContext-CrKRLTOT.js";import"./RegisterGraphicalItemId-C6fN5b4g.js";import"./ErrorBarContext-Brj2ZIP_.js";import"./GraphicalItemClipPath-wv7NC4zW.js";import"./SetGraphicalItem-BpzaqcDs.js";import"./getZIndexFromUnknown-DGY3cukw.js";import"./useGraphicalItemIdentity-DtcgFGn-.js";import"./Curve-u1NUazY3.js";import"./step-m8FbBLvj.js";import"./path-DyVhHtw_.js";import"./ActivePoints-zmt_Feef.js";import"./Dot-BTyyD634.js";import"./getRadiusAndStrokeWidthFromDot-8Ne4VOFo.js";import"./useElementOffset-BPB7gh4S.js";import"./uniqBy-BXrH7P8U.js";import"./iteratee-Dnr_1A58.js";import"./Cross-BBTxzZop.js";import"./Sector-n_zpCIAF.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
