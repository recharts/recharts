import{R as e}from"./iframe-D4WxERWR.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-CSUQYPZm.js";import{R as h}from"./zIndexSlice-Ctb-XE3r.js";import{C as g}from"./ComposedChart-Bw102KtD.js";import{L as x}from"./Line-umjtcrXx.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DUPxeW1L.js";import{T as V}from"./Tooltip-C28rp3v5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-CWiuRNLE.js";import"./Layer-Cql_Pemo.js";import"./resolveDefaultProps-CcZJ3F4Z.js";import"./Text-DwZS23az.js";import"./DOMUtils-Dfn1BJxK.js";import"./ZIndexLayer-Czs-NT3b.js";import"./index-DBKc-d7M.js";import"./index-BrtN9C6M.js";import"./Label-DI6ASMtN.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-29BSG3By.js";import"./throttle-YSLka_uT.js";import"./types-Bl0q8uU6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-nOQMzdpc.js";import"./index-CN65hpd1.js";import"./index-CSWYxHgR.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-CDo6nEPG.js";import"./RechartsWrapper-BABrVhwD.js";import"./index-DUxamRCa.js";import"./fillDefinitions-LA2OUO3V.js";import"./CartesianChart-CoO-_Rza.js";import"./ZIndexPortal-CgOieTb4.js";import"./CategoricalChart-BsaTkIBD.js";import"./Curve-CCgKIDxa.js";import"./step-BXgucIl4.js";import"./path-DyVhHtw_.js";import"./LabelList-CQQZHleH.js";import"./ActivePoints-CTDmaIKH.js";import"./Dot--NIPiAHj.js";import"./activeStyles-BIi7TIST.js";import"./useAnimationId-VHvbbifh.js";import"./dataEntryStyles-Q9NassVy.js";import"./Symbols-C5JQpjZ0.js";import"./symbol-DvMe5rhC.js";import"./ErrorBarContext-f8d14flb.js";import"./SetGraphicalItem-BTGcX_vm.js";import"./getRadiusAndStrokeWidthFromDot-DuPKRIUg.js";import"./ActiveShapeUtils-ExAh61OK.js";import"./useEffectiveDataKey-BiVeMsFi.js";import"./useElementOffset-DucCROoJ.js";import"./uniqBy-D_80LO3-.js";import"./iteratee-CWtaTKWH.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CWHoCY7b.js";import"./Rectangle-CKjrVYq4.js";import"./util-Dxo8gN5i.js";import"./Sector-DHTcqVpn.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
