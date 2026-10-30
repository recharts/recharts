import{R as t}from"./iframe-Bp2XYb68.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-EIT5_cgk.js";import{R as l}from"./zIndexSlice-Cdn-Kk-M.js";import{C as x}from"./ComposedChart-C50k9Mlo.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DWEMPMAu.js";import{L as a}from"./Line-BuHa0ZJe.js";import{X as c}from"./XAxis-ts9--8Kg.js";import{T as g}from"./Tooltip-DefDQyy6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BYixOdgi.js";import"./Text-NUByGaeH.js";import"./resolveDefaultProps-DKzL2Qxu.js";import"./DOMUtils-CRqOLD4o.js";import"./ZIndexLayer-CdRyST1N.js";import"./index-D6Dz_bd_.js";import"./index-Cy8aa7S-.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B_7CHFJS.js";import"./throttle-DjpMRj7m.js";import"./axisSelectors-D7x9R07e.js";import"./d3-scale-BystX3Ur.js";import"./CartesianAxis-BoCxaOyC.js";import"./Layer-BCuSbR8-.js";import"./types-ChkwvJX7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BEFESDc_.js";import"./index-BgEF2N6-.js";import"./index-BWzqc-Tl.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DFwXtpN1.js";import"./index-BIZLi33-.js";import"./CartesianChart-B3KmVN-H.js";import"./ZIndexPortal-Dv9B-KcK.js";import"./CategoricalChart-DdepWN88.js";import"./LabelList-NX9sUv81.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-M7CoQGRa.js";import"./useAnimationId-BnLlvmFh.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DNSxrQCm.js";import"./tooltipContext-BaE0Fb1H.js";import"./dataEntryStyles-0iby4079.js";import"./fillDefinitions-ChX4QXi5.js";import"./ErrorBarContext-C1RLIbYa.js";import"./activeStyles-BkNcOac3.js";import"./SetGraphicalItem-C-JkmH8Z.js";import"./getZIndexFromUnknown-Dvm9xa7D.js";import"./useEffectiveDataKey-DiX5XHUq.js";import"./omit-BbC3M-Ig.js";import"./isArguments-yB-y1yaH.js";import"./Curve-L4y0Pw0M.js";import"./step-D6j5BM_X.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BQlT-yF-.js";import"./Dot-Bp6Z7m8n.js";import"./Symbols-BjKzRhG-.js";import"./symbol-AE1MCh3f.js";import"./getRadiusAndStrokeWidthFromDot-Du2-K1xF.js";import"./useElementOffset-C0qZzXDV.js";import"./uniqBy-C0-xR335.js";import"./iteratee-B9Sxwtsj.js";import"./Cross-dfK3CHkP.js";import"./Sector-Ml-EH-s8.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
