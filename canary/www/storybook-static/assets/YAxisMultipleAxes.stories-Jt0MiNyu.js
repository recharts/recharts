import{R as t}from"./iframe-i0tdfO-S.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DpT96wDN.js";import{R as l}from"./zIndexSlice-kcLB36p_.js";import{C as x}from"./ComposedChart-CzSoXaYq.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-E3t8z6C5.js";import{L as a}from"./Line-Cm9DvNYq.js";import{X as c}from"./XAxis-DVXCxOsO.js";import{T as g}from"./Tooltip-hnGeefGZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DT2Ych2e.js";import"./Text-BMlLhZu5.js";import"./resolveDefaultProps-Cqgjjt0o.js";import"./DOMUtils-CUxE2jbS.js";import"./isWellBehavedNumber-BGsBu9W1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CZv5OG2W.js";import"./index-C1dNy9AB.js";import"./index-BlLn1ZJf.js";import"./RechartsWrapper-CQ-K3_cR.js";import"./index-BsuycueP.js";import"./index-BBdkxuke.js";import"./throttle-yuh6eqF5.js";import"./axisSelectors-C9dKusfX.js";import"./d3-scale-Clxk0FTV.js";import"./renderedTicksSlice-xuaKpSF7.js";import"./CartesianAxis-CDi0h_Ul.js";import"./Layer-CsmYaDC8.js";import"./types-CcIZQOYN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-C7h8s25b.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B95UWo8G.js";import"./chartDataContext-DuTDnpGx.js";import"./CategoricalChart-DFB3mzsf.js";import"./tooltipContext-B71JGNeD.js";import"./AnimatedItems-DHFbNXP7.js";import"./useAnimationId-OfLHi_5O.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BEbMkxuP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-EZQtDmwK.js";import"./RegisterGraphicalItemId-DtBmeLcC.js";import"./ErrorBarContext-FzqsPEvI.js";import"./GraphicalItemClipPath-BsfG3uc-.js";import"./SetGraphicalItem-DW3yQoWV.js";import"./getZIndexFromUnknown-iUg9cF37.js";import"./graphicalItemSelectors-Ce-R31iD.js";import"./Curve-Dy9EB64d.js";import"./step-hH_hNvlA.js";import"./path-DyVhHtw_.js";import"./ActivePoints-pXtGf72N.js";import"./Dot-CtPF4Cca.js";import"./graphicalItemIdentity-wnXl2DYz.js";import"./useElementOffset-CSiJWWdb.js";import"./uniqBy-CKF-LbxF.js";import"./iteratee-DkO0J_ik.js";import"./Cross-BVPma9bA.js";import"./Sector-JppCnCMA.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
