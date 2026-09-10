import{R as e}from"./iframe-Cuw567ao.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CFLpq8b6.js";import{R as h}from"./zIndexSlice-BuAoIKSs.js";import{C as g}from"./ComposedChart-Qred9gjF.js";import{L as x}from"./Line-DlwGtjpP.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-sEI--FZR.js";import{T as V}from"./Tooltip-Cptx_Upa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-D-JaI_zt.js";import"./Layer-T72FoYEi.js";import"./resolveDefaultProps-EeLa_nJM.js";import"./Text-DEJPj4XQ.js";import"./DOMUtils-mjR2JQA6.js";import"./isWellBehavedNumber-B73u9WX2.js";import"./useId-JkOEL8Mu.js";import"./useBackwardsCompatibleTheme-CpTahyhZ.js";import"./Label-BJjrjkoL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-b9cpcpRU.js";import"./index-DPZE1hYp.js";import"./index-CitLG62V.js";import"./types-BooOBCdC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DdMSNSAt.js";import"./throttle-Bjmeh804.js";import"./index-DSKcUbNG.js";import"./index-1-Kpwwt_.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Dc_lFngx.js";import"./axisSelectors-C6YnqdB_.js";import"./index-CYPd_aD4.js";import"./CartesianChart-D-_oA4AU.js";import"./chartDataContext-CU7BnpPX.js";import"./CategoricalChart-BLUN9mEz.js";import"./Curve-DpAcFiD4.js";import"./step-oaTKbJ5-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B1juRf7B.js";import"./useAnimationId-7XVM7nxW.js";import"./ActivePoints-DUj5MP15.js";import"./Dot-DhnV0obD.js";import"./RegisterGraphicalItemId-COeScAua.js";import"./ErrorBarContext-DsK39YKv.js";import"./GraphicalItemClipPath-DroKw-TI.js";import"./SetGraphicalItem--pdnWjmL.js";import"./getRadiusAndStrokeWidthFromDot-D9Yg2xkO.js";import"./ActiveShapeUtils-P98ujLW0.js";import"./useGraphicalItemIdentity-DXn-ONdl.js";import"./useElementOffset-DmR9p-uX.js";import"./uniqBy-CsdKAqlX.js";import"./iteratee-B0sRemCe.js";import"./Cross-DNmypU88.js";import"./Rectangle-DCUZMkY0.js";import"./util-Dxo8gN5i.js";import"./Sector-C8gb8Py2.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
