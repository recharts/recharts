import{R as e}from"./iframe-BMnEk6rk.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DO8MMAbO.js";import{R as h}from"./zIndexSlice-AHK2lLDY.js";import{C as g}from"./ComposedChart-DXU97qLG.js";import{L as x}from"./Line-uhUVV2ZJ.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CFf5tOkL.js";import{T as V}from"./Tooltip-CdRDsB00.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-1xDTwGjL.js";import"./Layer-DhQvAzDq.js";import"./resolveDefaultProps-B_QljJZX.js";import"./Text-C8Qyn2EQ.js";import"./pageBackground-CtZK7idk.js";import"./ZIndexLayer-B5NKkV0N.js";import"./index-lkPNhlVs.js";import"./index-Bttv8G3u.js";import"./Label-h8wQzOus.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CeZI25QH.js";import"./throttle-BLJmRI7W.js";import"./types-BEqbC_4a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CBxoq99O.js";import"./index-DVw0VuQJ.js";import"./index-Bk611d1z.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-p5JtpZwX.js";import"./RechartsWrapper-D4g7WfzD.js";import"./index-Cs2FdYvJ.js";import"./CartesianChart-D8VYP9Px.js";import"./ZIndexPortal-BccU1gyk.js";import"./CategoricalChart-CejU0SpF.js";import"./Curve-D8kPdRuj.js";import"./step-OCTxecjD.js";import"./path-DyVhHtw_.js";import"./LabelList-Dd3JyrGq.js";import"./ActivePoints-BPIJeIuh.js";import"./Dot-BOMHkylR.js";import"./activeStyles-DlaO21qO.js";import"./useAnimationId-Ctda-hFk.js";import"./dataEntryStyles-DegCLzhf.js";import"./Symbols-H6KF7Fzl.js";import"./symbol-BrVg2837.js";import"./ErrorBarContext-dq2106Y0.js";import"./SetGraphicalItem-C1JNOq53.js";import"./getRadiusAndStrokeWidthFromDot-BNTnGfox.js";import"./ActiveShapeUtils-BwTzV5YZ.js";import"./useEffectiveDataKey-DQstj3az.js";import"./useElementOffset-CKZUIDIC.js";import"./uniqBy-m6py-FT2.js";import"./iteratee-Dc85xDQN.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CkQASEDQ.js";import"./Rectangle-CyQcxgx5.js";import"./util-Dxo8gN5i.js";import"./Sector-GHL6DImZ.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,jt as __namedExportsOrder,Pt as default};
