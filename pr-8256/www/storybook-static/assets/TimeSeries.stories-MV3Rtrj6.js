import{R as e}from"./iframe-Z3SayaVd.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BsEr8UIp.js";import{R as h}from"./zIndexSlice-Dh2HMKB6.js";import{C as g}from"./ComposedChart-i6W5PytN.js";import{L as x}from"./Line-n6wgVlI4.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-COX3gckA.js";import{T as V}from"./Tooltip-CjSCnT_4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-CDmW-YMV.js";import"./Layer-R9bgEcMl.js";import"./resolveDefaultProps-DNiWcqg9.js";import"./Text-DdcAXxQ7.js";import"./ZIndexLayer-y38pl_-1.js";import"./index--orTKKd0.js";import"./index-wtNxUfyP.js";import"./Label-gVjZnKx0.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DRpHoHNx.js";import"./throttle-Dxt6SGJ3.js";import"./types-C7fTXY90.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B1QrN0Ft.js";import"./index-Byv9yEMF.js";import"./index-IODgrwVj.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors--kuv0hpR.js";import"./RechartsWrapper-rHkMTZTL.js";import"./index-eVlhMApr.js";import"./fillDefinitions-YvUR7ZoJ.js";import"./CartesianChart-C0rkW4er.js";import"./chartDataContext-MZv5qjpR.js";import"./CategoricalChart-B9nlic4H.js";import"./getRadiusAndStrokeWidthFromDot-CRZbI57R.js";import"./Curve-5n5qGKoW.js";import"./step-BOsnLXQi.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CdjRVARh.js";import"./ActivePoints-mT6mIIhN.js";import"./Dot-CnIUGRfT.js";import"./activeStyles-DoLNHT3-.js";import"./useAnimationId-CJJ1SFId.js";import"./Symbols-D5F94Msa.js";import"./symbol-Cplhih6x.js";import"./ErrorBarContext-CcYlyxVe.js";import"./SetGraphicalItem-na8KM_FV.js";import"./ActiveShapeUtils-8h_kjkj8.js";import"./useEffectiveDataKey-COaHCNkR.js";import"./useElementOffset-Bp-2_zay.js";import"./uniqBy-DSum8Wv6.js";import"./iteratee-JP_8kGzy.js";import"./isArguments-yB-y1yaH.js";import"./Cross-wXMY7t0N.js";import"./Rectangle-C9s6B2mt.js";import"./util-Dxo8gN5i.js";import"./Sector-BC703UDw.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
