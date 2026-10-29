import{R as t}from"./iframe-BVlfuHR1.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-4InIcFXf.js";import{R as l}from"./zIndexSlice-DKBlzg_K.js";import{C as x}from"./ComposedChart-BrTaz3ZS.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BEGwmIxN.js";import{L as a}from"./Line-D92Dv_C3.js";import{X as c}from"./XAxis-DixivmhH.js";import{T as g}from"./Tooltip-CeEsAu0L.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Ckax5Juk.js";import"./Text-BxId80OJ.js";import"./resolveDefaultProps-2dAZYWIG.js";import"./DOMUtils-Dtel_m_3.js";import"./ZIndexLayer-6Z0WH24s.js";import"./index-BQP9-3uy.js";import"./index-Y_wwfQb4.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DnZiXFIF.js";import"./throttle-B2Qtjc3W.js";import"./axisSelectors-Brqs7zw9.js";import"./d3-scale-BNlCtWSy.js";import"./CartesianAxis-CPYLIIET.js";import"./Layer-B5eXi8NV.js";import"./types-DYWAvxYY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CoA4ci_o.js";import"./index-DNy-3Gid.js";import"./index-DZEpaPFi.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DRZJzitw.js";import"./index-CCVms-fF.js";import"./CartesianChart-ZoKsxEgh.js";import"./ZIndexPortal-DaL6GVrS.js";import"./CategoricalChart-DD3gjEAO.js";import"./LabelList-qAsFJxAr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-zs3F46mh.js";import"./useAnimationId-eAQDadKJ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils--AsRwBXZ.js";import"./tooltipContext-C85XqxZL.js";import"./dataEntryStyles-DSEQ0COb.js";import"./ErrorBarContext-DAUTVb2k.js";import"./activeStyles-B82PQSZb.js";import"./SetGraphicalItem-Cncgk9Qh.js";import"./getZIndexFromUnknown-DlaXSOxm.js";import"./useEffectiveDataKey-BtHFWZML.js";import"./fillDefinitions-B4sFAt8T.js";import"./omit-DgaV2i7I.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D680kDYc.js";import"./step-O-KWti3S.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CI1sJ5FS.js";import"./Dot-Btb-E3dw.js";import"./Symbols-Djyf5WWk.js";import"./symbol-ucn0ySfm.js";import"./getRadiusAndStrokeWidthFromDot-Cneka8AD.js";import"./useElementOffset-CrNfCBWI.js";import"./uniqBy-B5YMrEOh.js";import"./iteratee-B_C-TQMi.js";import"./Cross-CBOhtoV3.js";import"./Sector-D9xN3Yrf.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
